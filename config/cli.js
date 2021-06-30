const path = require('path');
const fs = require('fs');
const util = require('util');
const rimraf = util.promisify(require('rimraf'));
const inquirer = require('inquirer');
const readFile = util.promisify(fs.readFile);

const constant = require('./constant');

async function hackReactDOM() {
  const pkgName = 'react-dom.development.js';
  const pkgOriginPath = path.resolve(__dirname, `../node_modules/react-dom/cjs/${pkgName}`);
  const pkgTargetPath = path.resolve(__dirname, `./${pkgName}`);
  const viteCachePath = path.resolve(__dirname, '../node_modules/.vite');
  // 清除vite缓存
  await rimraf(viteCachePath);
  // 替换ReactDOM
  const ctn = await readFile(pkgTargetPath);
  fs.writeFileSync(pkgOriginPath, ctn);
}

function parseLessionList() {
  const pkgOriginPath = path.resolve(__dirname, `../src`);
  return fs.readdirSync(pkgOriginPath).filter(name => name.startsWith(constant.LESSION_PREFFIX));
}

inquirer.prompt([
  {
    type: 'list',
    name: 'lession',
    message: '你想看哪道题的示例？',
    choices: parseLessionList()
  },
]).then(({lession}) => {
  process.env[constant.LESSION_ENV] = lession;
  hackReactDOM();
  const vite = path.resolve(__dirname, '../node_modules/vite/bin/vite.js');
  require(vite);
})