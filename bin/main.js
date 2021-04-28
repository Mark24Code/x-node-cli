#!/usr/bin/env node

'use strict';

var fs = require('fs');
var program = require('commander');
var download = require('download-git-repo');
var handlebars = require('handlebars');
var inquirer = require('inquirer');
var ora = require('ora');
var chalk = require('chalk');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var program__default = /*#__PURE__*/_interopDefaultLegacy(program);
var download__default = /*#__PURE__*/_interopDefaultLegacy(download);
var handlebars__default = /*#__PURE__*/_interopDefaultLegacy(handlebars);
var inquirer__default = /*#__PURE__*/_interopDefaultLegacy(inquirer);
var ora__default = /*#__PURE__*/_interopDefaultLegacy(ora);
var chalk__default = /*#__PURE__*/_interopDefaultLegacy(chalk);

const target_repo = "https://github.com:Mark24Code/react-mobile-template#master";

var repo = target_repo;

const symbols = {
  success: "[success]",
  error: "[error]"
};

program__default['default'].version('1.0.0', '-v, --version')
  .command('init <name>')
  .action((name) => {
    if (!fs__default['default'].existsSync(name)) {
      inquirer__default['default'].prompt([
        {
          name: 'description',
          message: '请输入项目描述'
        },
        {
          name: 'author',
          message: '请输入作者名称'
        }
      ]).then((answers) => {
        const spinner = ora__default['default']('正在下载模板...');
        spinner.start();
        download__default['default'](repo, name, { clone: true }, (err) => {
          if (err) {
            spinner.fail();
            console.log(symbols.error, chalk__default['default'].red(err));
          } else {
            spinner.succeed();
            const fileName = `${name}/package.json`;
            const meta = {
              name,
              description: answers.description,
              author: answers.author
            };
            if (fs__default['default'].existsSync(fileName)) {
              const content = fs__default['default'].readFileSync(fileName).toString();
              const result = handlebars__default['default'].compile(content)(meta);
              fs__default['default'].writeFileSync(fileName, result);
            }
            console.log(symbols.success, chalk__default['default'].green('项目初始化完成'));
          }
        });
      });
    } else {
      // 错误提示项目已存在，避免覆盖原有项目
      console.log(symbols.error, chalk__default['default'].red('项目已存在'));
    }
  });
program__default['default'].parse(process.argv);

var src = {

};

module.exports = src;
