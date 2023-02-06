import { IApi } from 'umi';
import { lodash } from 'umi/plugin-utils';
import { parseDoc } from 'docaid';
import path from 'path';
import fs from 'fs';
import { buildDocs } from './buildDocs';

export default (api: IApi) => {
  let singleDocMap: Record<string, string> = {};

  api.describe({
    key: 'docaid',
    config: {
      schema(Joi) {
        return Joi.object({
          logo: Joi.string(),
          title: Joi.string(),
          theme: Joi.string().valid('leerob'),
          headTitle: Joi.string(),
          siteUrl: Joi.string()
            .pattern(/\/$/)
            .message(`siteUrl must ends with '/'`),
          navs: Joi.array().items(Joi.object()),
          copyright: Joi.string(),
          rss: Joi.object(),
          transform: Joi.function(),
          docDir: Joi.string(),
          buildDocsSeparately: Joi.bool(),
        });
      },
    },
    enableBy: api.EnableBy.config,
  });

  api.onStart(async () => {
    if (!['dev', 'build'].includes(api.name)) return;
    if (api.config.docaid.buildDocsSeparately) return;
    const docsDir = path.join(
      api.paths.cwd,
      api.config.docaid.docDir || 'docs',
    );
    await buildDocs(docsDir, {
      output: path.join(api.paths.cwd, 'public'),
      config: api.config.docaid,
      watch: api.name === 'dev',
    });
  });

  api.addTmpGenerateWatcherPaths(() => {
    return process.env.DOCAID_DEBUG
      ? [path.join(__dirname, '../templates')]
      : [];
  });

  api.registerCommand({
    name: 'docaid',
    async fn({ args }) {
      if (args._[0] === 'build') {
        const docsDir = path.join(
          api.paths.cwd,
          api.config.docaid.docDir || 'docs',
        );
        await buildDocs(docsDir, {
          output: path.join(api.paths.cwd, 'public'),
          config: api.config.docaid,
          watch: args.watch,
        });
      } else {
        throw new Error(`Unknown command ${args._[0]}`);
      }
    },
  });

  api.chainWebpack((config) => {
    const REG = /\.md$/;
    config.module.rule('asset').exclude.add(REG).end();
    config.module.rule('md').test(REG).type('asset/source').end();
  });

  api.addRuntimePlugin(() => {
    return [withTmpPath('runtime.tsx')];
  });

  api.onGenerateFiles(() => {
    const templateDir = path.join(__dirname, '../templates');
    // TODO: auto resolve all pakcage.json deps, but exclude `@types/*`
    const depResolvedMap = ['react-helmet', 'framer-motion'].reduce<
      Record<string, string>
    >((memo, dep) => {
      memo[dep] = path.dirname(require.resolve(`${dep}/package.json`));
      return memo;
    }, {});
    fs.readdirSync(templateDir).forEach((f) => {
      if (fs.statSync(path.join(templateDir, f)).isFile()) {
        let content = fs.readFileSync(path.join(templateDir, f), 'utf-8');
        Object.entries(depResolvedMap).forEach(([dep, resolvedPath]) => {
          content = content
            .replace(`from '${dep}'`, `from '${resolvedPath}'`)
            .replace(`from "${dep}"`, `from '${resolvedPath}'`);
        });
        api.writeTmpFile({
          path: f,
          content,
        });
      }
    });
    const themePath = path.join(api.cwd, 'theme.tsx');
    const userTheme = fs.existsSync(themePath);
    api.writeTmpFile({
      path: 'index.ts',
      content: `
import config from './config.json';

export function useDocAidConfig() {
  return config;
}
export function useDocAidTheme() {
  const defaultTheme = require('./defaultTheme');
${
  userTheme
    ? `const userCustomTheme = require('${themePath}');`
    : 'const userCustomTheme = {};'
}
${
  api.config.docaid.theme
    ? `const userConfigTheme = require('./${api.config.docaid.theme}Theme');`
    : 'const userConfigTheme = {};'
}
  return { ...defaultTheme, ...userConfigTheme, ...userCustomTheme };
}
      `,
    });
    api.writeTmpFile({
      path: 'singleDocMap.json',
      content: JSON.stringify(singleDocMap, null, 2),
    });
    api.writeTmpFile({
      path: 'config.json',
      content: JSON.stringify(
        lodash.pick(api.config.docaid, [
          'logo',
          'title',
          'headTitle',
          'siteUrl',
          'navs',
          'copyright',
        ]),
        null,
        2,
      ),
    });
  });

  api.modifyRoutes(async () => {
    const routes: Record<string, any> = {};
    const docsDir = path.join(
      api.paths.cwd,
      api.config.docaid.docDir || 'docs',
    );
    const userLayoutFile = path.join(api.paths.absSrcPath, 'layouts/index.tsx');
    const layoutFile = fs.existsSync(userLayoutFile)
      ? userLayoutFile
      : withTmpPath('Layout.tsx');
    const layoutId = '@docaid/layout';
    routes[layoutId] = {
      id: layoutId,
      path: '/',
      absPath: '/',
      file: layoutFile,
      parentId: undefined,
    };
    // reset
    singleDocMap = {};
    for (const f of fs.readdirSync(docsDir)) {
      const filePath = path.join(docsDir, f);
      if (f.endsWith('.md')) {
        const name = f.replace(/\.md$/, '');
        const file = withTmpPath('SingleDoc.tsx');
        const path = `/${name === 'README' ? '' : name}`;
        singleDocMap[path] = await parseDoc(filePath, {});
        const id = `@docaid/${name}`;
        routes[id] = {
          id,
          path,
          absPath: path,
          file,
          parentId: layoutId,
        };
      } else if (fs.statSync(filePath).isDirectory()) {
        routes[`@docaid/${f}`] = {
          id: `@docaid/${f}`,
          path: `/${f}`,
          absPath: `/${f}`,
          file: withTmpPath('DocIndex.tsx'),
          parentId: layoutId,
        };
        routes[`@docaid/${f}/:id`] = {
          id: `@docaid/${f}/:id`,
          path: `/${f}/:id`,
          absPath: `/${f}/:id`,
          file: withTmpPath('Doc.tsx'),
          parentId: layoutId,
        };
      }
    }
    return routes;
  });

  function withTmpPath(p: string) {
    return path.join(api.paths.absTmpPath, 'plugin-docaid', p);
  }
};
