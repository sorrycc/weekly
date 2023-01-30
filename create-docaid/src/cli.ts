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
  const newFile = file.replace(/^_/, '.');
  console.log(`Create ${newFile}`);
  const sourceFile = path.join(base, file);
  const targetFile = path.join(cwd, newFile);
  fs.mkdirSync(path.dirname(targetFile), { recursive: true });
  fs.copyFileSync(sourceFile, targetFile);
});
console.log('done');
