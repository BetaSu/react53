#!/usr/bin/env node 
const path = require('path');
const inquirer = require('inquirer');
const {name} = require(path.resolve(__dirname, '../package.json'));

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
]).then(a => {
  
})