#!/usr/bin/env node 
const path = require('path');

const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const {exec} = require('child_process');
const {name} = require(path.resolve(__dirname, '../package.json'));

function execDefer(command) {
  return new Promise(function(resolve, reject) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }

      resolve(stdout.trim());
    });
  });
}

console.log(chalk.yellow(`欢迎使用${name} —— 交互式React进阶手册`));
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
    choices: [{
      name: '否',
      value: undefined
    }, {
      name: '淘宝镜像',
      value: 'http://registry.npm.taobao.org'
    }]
  },
]).then(async ({dir, mirror}) => {
  const spinner = ora('正在初始化项目');
  spinner.start();

  try {
    await execDefer(`git clone git@github.com:BetaSu/react53.git ${dir}`);
    spinner.text = '正在安装依赖';
    await execDefer(`cd ${dir} && npm install ${mirror ? `--registry=${mirror}` : ''}`);
    spinner.succeed('初始化项目完成');
  } catch(e) {
    spinner.fail('初始化项目失败');
    console.log(chalk.red(e));
  }
})