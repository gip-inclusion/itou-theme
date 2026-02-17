import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const distRoot = path.join(root, 'dist');
const storybookRoot = path.join(distRoot, 'storybook-static');

const writeNoJekyll = async (dir) => {
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, '.nojekyll'), '');
};

await writeNoJekyll(distRoot);
await writeNoJekyll(storybookRoot);
