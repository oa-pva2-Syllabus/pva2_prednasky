import fs from 'node:fs/promises';
import path from 'node:path';

import { exec } from 'child_process';
import { promisify } from 'util';

const TALKS_PATH = 'pva2/';
const OUTPUT_PATH = 'dist';
const PUBLIC_PATH = 'public/';
const talks = [];

const talksFiles = await fs.readdir(TALKS_PATH, { withFileTypes: true });

const execPromise = promisify(exec);

console.log( "📃 build slides ...");
for (const file of talksFiles) {

  if (file.isDirectory()) {
    try {
      const rawPackageJson = await fs.readFile(path.join(file.path, file.name, 'src/package.json'));
      const packageJson = JSON.parse(rawPackageJson.toString());

      console.log(packageJson.name);
      await execPromise(`pnpm -r --filter=./pva2/${packageJson.name}/src/** run build`);

    } catch (err) {
      console.error(err);
    }
  }
}
