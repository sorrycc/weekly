import { IApi } from 'umi';
import { buildDocs } from './buildDocs';
import path from 'path';
import fs from 'fs';

export default (api: IApi) => {
  let singleDocMap: Record<string, string> = {};

  api.describe({
    key: 'docaid',
    config: {
      schema(Joi) {
        return Joi.object({
          title: Joi.string(),
          siteUrl: Joi.string()
            .pattern(/\/$/)
            .message(`siteUrl must ends with '/'`),
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
    fs.readdirSync(templateDir).forEach((f) => {
      if (fs.statSync(path.join(templateDir, f)).isFile()) {
        api.writeTmpFile({
          path: f,
          content: fs.readFileSync(path.join(templateDir, f), 'utf-8'),
        });
      }
    });

    api.writeTmpFile({
      path: 'singleDocMap.json',
      content: JSON.stringify(singleDocMap, null, 2),
    });
  });

  api.modifyRoutes(() => {
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
        singleDocMap[path] = fs.readFileSync(filePath, 'utf-8');
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
