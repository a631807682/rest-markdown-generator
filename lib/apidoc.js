const controllerModel = require('../model/controllerModel'),
    actionModel = require('../model/actionModel'),
    paramModel = require('../model/paramModel'),
    regEnum = require('./regEnum'),
    fs = require('co-fs'),
    path = require('path');

/**
 * api文档头部
 * @return {[type]}      [description]
 */
exports.header = function*(){
    return yield fs.readFile(path.join(__dirname, '../data/header.md'), 'utf8');
};

/**
 * 生成api文档
 * @param  {[type]} area [description]
 * @param  {[type]} ctrl [description]
 * @param  {[type]} text [description]
 * @return {[type]}      [description]
 */
exports.doc = function*(area, ctrl, text) {
    let result;
    let localPath = `/api/${area}/${ctrl}/`;

    console.log(`${localPath}`);
    let ctrlData = getCtrlData(localPath, text);
    ctrlData && (result = yield render(ctrlData));

    return result;
};

/**
 * 获取控制器文档数据
 * @param  {string} localPath [控制器api地址]
 * @param  {string} text      [控制器js文档内容]
 * @return {controllerModel}           [控制器文档数据模型]
 */
let getCtrlData = function(localPath, text) {
    //获取注释文档
    let notes = text.match(regEnum.note);
    if (notes) {
        //ctrl文档模型
        let ctrlDoc = new controllerModel(localPath);
        notes.forEach((n) => {
            if (regEnum.controller.exec(n)) {
                let controllerMemo = n.match(regEnum.controller)[1];
                ctrlDoc.memo = controllerMemo;
            } else {
                try {
                    let action = n.match(regEnum.action)[1];
                    if (action) {
                        let actionInfo = action.split('-'); //[ 'createApplication'  , '添加群应用']
                        //action文档模型
                        let actionDoc = new actionModel();
                        //描述说明
                        actionDoc.name = actionInfo[0];
                        actionDoc.memo = actionInfo[1];
                        //方法get/post
                        actionDoc.method = n.match(regEnum.method)[1];
                        //参数
                        let paramNotes = n.match(regEnum.params);
                        if (paramNotes) { //有参数
                            paramNotes.forEach((paramNote) => {
                                let paramValue = paramNote.match(regEnum.paramValue)[1];
                                let paramDoc = new paramModel();
                                //type
                                paramDoc.type = paramValue.match(regEnum.paramType)[1];
                                paramDoc.name = paramValue.match(regEnum.paramName)[1];
                                paramDoc.memo = paramValue.match(regEnum.paramMemo)[1];

                                actionDoc.pushParam(paramDoc);
                                // console.log('param:', paramDoc);
                            });
                        }
                        //返回值
                        let returnNote = n.match(regEnum.return)[1];
                        regEnum.returnType.exec(returnNote) && (actionDoc.returnType = returnNote.match(regEnum.returnType)[1]);
                        regEnum.returnMemo.exec(returnNote) && (actionDoc.returnMemo = returnNote.match(regEnum.returnMemo)[1]);

                        ctrlDoc.pushAction(actionDoc);

                    } else {
                        throw new Error('@action is missing');
                    }
                } catch (err) {
                    throw new Error(`\n ${localPath}  action note err:\n ${n}`);
                }
            }
        });

        return ctrlDoc;
    } else {
        return null;
    }
};

/**
 * 转md
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
let render = function*(data) {
    let controllerMd = yield fs.readFile(path.join(__dirname, '../data/controller.md'), 'utf8');
    let actionMd = yield fs.readFile(path.join(__dirname, '../data/action.md'), 'utf8');
    let paramMd = yield fs.readFile(path.join(__dirname, '../data/param.md'), 'utf8');

    let result = controllerMd.replace(/{controller.memo}/g, data.memo);

    data.actions.forEach((a) => {
        //action信息
        let md = actionMd;
        md = md.replace('{action.memo}', a.memo);
        md = md.replace('{action.path}', a.path);
        md = md.replace('{action.method}', a.method);

        //参数信息
        let mdParams = '';
        a.params.forEach((p) => {
            let pmd = paramMd;
            // console.log(p.name, p.type, p.memo);
            pmd = pmd.replace('{param.name}', p.name);
            pmd = pmd.replace('{param.type}', p.type);
            pmd = pmd.replace('{param.memo}', p.memo);
            mdParams += pmd;
        });
        md = md.replace('{action.params}', mdParams);

        //返回值信息
        // console.log('---------', a.returnType, a.returnMemo);
        let returnType = a.returnType ? a.returnType : '无';
        let returnMemo = a.returnMemo ? a.returnMemo : '无';
        md = md.replace('{action.returnType}', returnType);
        md = md.replace('{action.returnMemo}', returnMemo);

        result += md;
    });

    // console.log(result);
    return result;
};
