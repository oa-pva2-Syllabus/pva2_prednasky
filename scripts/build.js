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

// Vytvoříme adresář "dist"
const dir = path.join(process.cwd(), 'dist');

fs.readdir(process.cwd(), (err, files) => {
  if (err) {
    console.error('Chyba při čtení adresáře:', err);
    return;
  }

  if (!files.includes('dist')) {
    fs.mkdir(dir, (err) => {
      if (err) {
        console.error('Chyba při vytváření adresáře:', err);
      } else {
        console.log('Adresář "dist" byl úspěšně vytvořen.');
      }
    });
  } else {
    console.log('Adresář "dist" již existuje.');
  }
});


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
