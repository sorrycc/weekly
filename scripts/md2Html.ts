import chokidar from 'chokidar';
import { readFileSync, writeFileSync } from 'fs';
import marked from 'marked';
import { join } from 'path';
import yParser from 'yargs-parser';
// import prismjs from "prismjs";

// const renderer = new marked.Renderer();
// renderer.code = function(code, lang, escaped) {
//   code = this.options.highlight(code, lang);
//   if (!lang) {
//     return `<pre><code>${code}</code></pre>`;
//   }

//   var langClass = "language-" + lang;
//   return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
// };

// marked.setOptions({
//   renderer,
//   highlight: function(code, lang) {
//     try {
//       return prismjs.highlight(code, prismjs.languages[lang], lang);
//     } catch {
//       return code;
//     }
//   }
// });

function transform(file: string) {
  const content = readFileSync(join(__dirname, '../', file), 'utf-8');
  let html = `
<!doctype html>
<html>
<head>
<link rel="stylesheet" href="default.css" />
</head>
<body>
${marked(content)}
<p class="square"><img src="https://img.alicdn.com/imgextra/i2/O1CN0173tMSs1Pm04a8TuyD_!!6000000001882-1-tps-128-128.gif" /></p>
<p class="zaikan">点击<b>“在看”</b>，与好友共享！</p>
</body>
</html>
`;
  html = html.replace('<p><strong>', '<p class="first"><strong></strong>');
  html = html.replace(
    /<pre><code/g,
    '<pre><span class="pre-header"></span><code',
  );
  html = html.replace(
    /<h2([^>]+?)>([^<]+?)<\/h2>/g,
    '<h2$1><span>$2</span></h2>',
  );
  html = html.replace(/<p>推荐人：/g, '<p class="author">推荐人：');
  html = html.replace(/<p>自荐人：/g, '<p class="author">自荐人：');
  writeFileSync(join(__dirname, '../index.html'), html, 'utf-8');
}

const args = yParser(process.argv.slice(2), {});

console.log('transform');
transform(args._[0]);

if (args.watch) {
  console.log('watch');
  const watcher = chokidar.watch(join(__dirname, '..', args._[0]), {
    ignoreInitial: true,
  });
  watcher.on('change', () => {
    console.log('transform');
    transform(args._[0]);
  });
}
