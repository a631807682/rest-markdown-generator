const mdGenerator = require('./lib/mdGenerate'),
    co = require('co');

let path = process.cwd();

co(function*() {
    //md生成器
    let mdg = new mdGenerator(path);
    yield mdg.go();
}).then(success => console.log(`==========generate ${path} over=========`), err => console.log('err', err));
