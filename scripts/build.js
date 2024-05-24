#!/usr/bin/env zx
import fg from "fast-glob";
import fs from "fs";
import fse from "fs-extra";
import path from "path";
import "zx/globals";
import {rimraf} from "rimraf";

const GitPagesBase = "pva2_prednasky/"

const rootDir = path.resolve(__dirname, "../");
const slidesDir = path.resolve(__dirname, "../slides");
const galleryDir = path.resolve(__dirname, "../gallery");
const slideProjectDirs = await fg("./*", {
  cwd: slidesDir,
  onlyFiles: false,
  deep: 1,
  absolute: true,
});

cd(rootDir);

// dist
if (!fs.existsSync(path.resolve(rootDir, "dist"))) {
  fs.mkdirSync(path.resolve(rootDir, "dist"));
}

$`echo "📃 ============ ..."`;
$`echo "📃 build slides ..."`;
$`echo "📃 ============ ..."`;

for (let dir of slideProjectDirs) {
  const pkgJsonFile = path.resolve(dir, "package.json");
  const pkgName = require(pkgJsonFile).name;

  $`echo "📃 build slides ${pkgName} ..."`;
  console.log(dir)

  cd(dir);
  await fs.promises.writeFile(path.join(dir, 'vite.config.ts'), `import { defineConfig } from "vite";

export default defineConfig({
  base: "/${GitPagesBase}${pkgName}/",
});
`);

  await $`pnpm build`;

  console.log("vite.config.ts removed")
  await fs.promises.unlink(path.join(dir, 'vite.config.ts'));

  console.log("copy to root dist")
  const src = path.join(dir, 'dist');
  const dest = path.resolve(rootDir, 'dist', pkgName);
  await fse.copy(src, dest);
  await fse.remove(src);
}
/*
console.log("gal")
$`echo "🚀  build gallery index ..."`;
cd(galleryDir);
await $`pnpm build`;
//await $`mv ./dist/* ${path.resolve(rootDir, 'dist')}`;
//await $`mv ./dist/* ${path.resolve(rootDir, 'dist')}`;
await fse.copy('./dist/*', path.resolve(rootDir, 'dist'));
//await $`rm -rf ./dist`;
rimraf('dist')
*/
$`echo "🎉  build success"`;
