import fg from 'fast-glob';
import path from 'path';
import fs from 'fs';

const cwd = process.cwd();
const base = path.join(__dirname, '../templates');
const files = fg.sync(['**/*'], {
  dot: true,
  cwd: base,
});
files.forEach((file) => {
  if (file.charAt(0) === '_') {
    file = file.replace('_', '.');
  }
  console.log(`Create ${file}`);
  const sourceFile = path.join(base, file);
  const targetFile = path.join(cwd, file);
  fs.mkdirSync(path.dirname(sourceFile), { recursive: true });
  fs.copyFileSync(sourceFile, targetFile);
});
console.log('done');
