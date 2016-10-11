const fs = require('co-fs'),
    path = require('path'),
    config = require('../config'),
    apidoc = require('./apidoc');

class generate {

    constructor(local) {
        this.basePath = path.join(local, config.dir);
    }

    * go() {
        let staticPath = this.basePath;

        if (yield fs.exists(staticPath)) {
            let result = yield apidoc.header();
            //区域
            let areas = yield fs.readdir(staticPath);
            for (let areaName of areas) {
                let areaPath = path.join(staticPath, `/${areaName}`);
                //控制器
                let ctrls = yield fs.readdir(areaPath);
                for (let ctrl of ctrls) {
                    let ctrlPath = path.join(areaPath, `/${ctrl}`);
                    let ctrlText = yield fs.readFile(ctrlPath, 'utf8');
                    //去除.js
                    let ctrlName = path.basename(ctrl, '.js');
                    let md = yield apidoc.doc(areaName, ctrlName, ctrlText);
                    md && (result += md);
                }
            }
            // console.log(result);
            let outputPath = path.join(global.processPath, 'rmg-temp-README.md');
            yield fs.writeFile(outputPath, result, 'utf8');
        } else {
            throw new Error(`\n${staticPath} is not exists`);
        }

    }
}

module.exports = generate;
