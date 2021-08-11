const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const constant = require('./constant');

function parseLessionList() {
  const pkgOriginPath = path.resolve(__dirname, `../src`);
  return fs.readdirSync(pkgOriginPath)
    .filter(name => name.startsWith(constant.LESSION_PREFFIX))
    .map(name => +name.split('_')[1]);
}

function checkLessionArg(num) {
  const lessionList = parseLessionList();
  if (!num) {
    console.log(chalk.red('请输入课程序号，如：npm test 2 代表运行作业2的测试用例'), `所有课程序号包括：`, chalk.green(lessionList));
    return false;
  }
  
  if (!lessionList.includes(num)) {
    console.log(chalk.red(`没有序号为${num}的课程`), `所有课程序号包括：`, chalk.green(lessionList));
    return false;
  }
  return true;
}

const lessionNum = +process.argv.slice(2)[0];
const isValidNum = checkLessionArg(lessionNum);
if (isValidNum) {
  const jestCliPath = path.resolve(__dirname, '../node_modules/jest-cli/bin/jest.js');
  require(jestCliPath);
}
