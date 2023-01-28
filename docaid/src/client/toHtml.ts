import MarkdownIt from 'markdown-it';
import type {
  PluginWithParams,
  PluginWithOptions,
  PluginSimple,
} from 'markdown-it';
import anchor from 'markdown-it-anchor';

export function toHtml(
  content: string,
  opts: {
    markdownItOptions?: MarkdownIt.Options;
    markdownItPlugins?: (PluginSimple | PluginWithParams | PluginWithOptions)[];
  } = {},
) {
  const md = new MarkdownIt({
    linkify: true,
    html: true,
    ...opts.markdownItOptions,
  });
  md.use(anchor);
  opts.markdownItPlugins?.forEach((plugin) => {
    if (Array.isArray(plugin)) {
      md.use(plugin[0], plugin[1]);
    } else {
      md.use(plugin);
    }
  });
  return md.render(content);
}
