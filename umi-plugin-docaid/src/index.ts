import { IApi } from 'umi';
import { buildDocs } from './buildDocs';
import path from 'path';

export default (api: IApi) => {
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
      const docsDir = path.join(
        api.paths.cwd,
        api.config.docaid.docDir || 'docs',
      );
      await buildDocs(docsDir, {
        output: path.join(api.paths.cwd, 'public'),
        config: api.config.docaid,
        watch: args.watch,
      });
    },
  });

  api.chainWebpack((config) => {
    const REG = /\.md$/;
    config.module.rule('asset').exclude.add(REG).end();
    config.module.rule('md').test(REG).type('asset/source').end();
  });
};
