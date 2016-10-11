#!/usr/bin/env node

const mdGenerator = require('./lib/mdGenerate'),
    co = require('co');

global.processPath = process.cwd();//命令当前路径

co(function*() {
    //md生成器
    let mdg = new mdGenerator(global.processPath);
    yield mdg.go();
}).then(success => console.log(`success`), err => console.log('err', err));
