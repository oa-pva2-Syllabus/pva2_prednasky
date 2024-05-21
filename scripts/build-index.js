import fs from 'node:fs/promises';
import path from 'node:path';

const TALKS_PATH = 'pva2/';
const OUTPUT_PATH = 'dist';
const PUBLIC_PATH = 'public/';
const talks = [];

const talksFiles = await fs.readdir(TALKS_PATH, { withFileTypes: true });





for (const file of talksFiles) {
  if (file.isDirectory()) {
    try {
      const rawPackageJson = await fs.readFile(path.join(file.path, file.name, 'src/package.json'));
      const packageJson = JSON.parse(rawPackageJson.toString());
      talks.push({path: file.name, title: packageJson.title, author: packageJson.author});
    } catch (err) {
      console.error(err);
    }
  }
}

const createLinkList = (talks) => talks.map(talk => `<li><a href="./${talk.path}">${talk.title} by ${talk.author.name}</a></li>`).join('');
await fs.writeFile(path.join(OUTPUT_PATH, 'index.html'), `<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Přednášky</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <img src="https://www.wanex.cz/wp-content/uploads/2013/01/logo.png" alt="Wanex logo" />
    <h1>Přednášky</h1>
    <ul>
      ${createLinkList(talks.reverse())}
    </ul>
  </body>
</html>
`);

await fs.copyFile(path.join(PUBLIC_PATH, 'styles.css'), path.join(OUTPUT_PATH, 'styles.css'));
