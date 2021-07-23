#!/usr/bin/env node 
const path = require('path');
const fs = require('fs');

const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const {exec} = require('child_process');
const {name} = require(path.resolve(__dirname, '../package.json'));
const {name: templateName} = require('react53-template/package.json');

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
]).then(({dir, mirror}) => {
  try {
    fs.mkdirSync(dir);
  } catch(e) {
    console.log('ww', e);
  }

  const spinner = ora('正在初始化项目');

  spinner.start();

  exec(`npm i ${templateName} ${mirror ? `--registry=${mirror}` : ''}`, (err, data) => {
    if (err) {
      console.log(chalk.red('模板下载失败 ', err.message));
    }
  })
})