#!/usr/bin/env node 
const path = require('path');

const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const {exec} = require('child_process');
const {name, description} = require(path.resolve(__dirname, '../package.json'));

function execDefer(command) {
  return new Promise(function(resolve, reject) {
    exec(command, (error, stdout) => {
      if (error) {
        return reject(error);
      }
      resolve(stdout.trim());
    });
  });
}

async function checkNodeVersion() {
  const versionTag = await execDefer(`node -v`);
  const [version] = versionTag.match(/\d+/) || [];
  const safeVersion = 14;
  if (version < safeVersion) {
    console.log(chalk.yellow(`当前node版本为v${version}，低于v${safeVersion}，可能会安装失败，建议升级到最新版本`));
  }
}

console.log(chalk.yellow(`欢迎使用${name} —— ${description}`));
inquirer.prompt([
  {
    type: 'input',
    name: 'dir',
    message: "课程目录名是？",
    default() {
      return name;
    },
  },
  {
    type: 'list',
    name: 'mirror',
    message: '是否使用镜像？',
    choices: [
      {
        name: '淘宝镜像',
        value: 'http://registry.npm.taobao.org'
      },{
        name: '否',
        value: undefined
      }
    ]
  },
]).then(async ({dir, mirror}) => {
  await checkNodeVersion();
  const spinner = ora('正在初始化项目');
  spinner.start();
  let processStep = 0;
  try {
    await execDefer(`git clone https://github.com/BetaSu/react53.git ${dir}`);
    processStep++;
    spinner.text = '正在安装依赖';
    await execDefer(`cd ${dir} && npm install ${mirror ? `--registry=${mirror}` : ''}`);
    processStep++;
    spinner.succeed('安装妥了，执行命令开始学习吧：');
    console.log(`  cd ${dir}`);
    console.log(`  npm start`);
  } catch(e) {
    spinner.fail(`初始化项目失败，${[
      '执行git clone报错',
      `执行npm install报错，可以试试进入${dir}目录手动安装依赖，${mirror ? '或者不使用镜像重新试试' : ''}`
    ][processStep]}`);
    console.log(chalk.red(e));
  }
})