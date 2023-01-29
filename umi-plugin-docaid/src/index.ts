import { IApi } from 'umi';

export default (api: IApi) => {
  api.describe({
    key: 'docaid',
    config: {
      schema(Joi) {
        return Joi.object();
      },
    },
    enableBy: api.EnableBy.config,
  });

  api.chainWebpack((config) => {
    const REG = /\.md$/;
    config.module.rule('asset').exclude.add(REG).end();
    config.module.rule('md').test(REG).type('asset/source').end();
  });
};
