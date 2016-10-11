/*
    ctrl文档数据模型
 */
class controllerModel {
    constructor(localPath) {
        this._localPath = localPath;
        this._actions = [];
    }

    //控制器说明
    set memo(value) {
        this._controllerMemo = value.trim();
    }

    get memo(){
        return this._controllerMemo;
    }

    get actions() {
        return this._actions;
    }

    pushAction(action) {
        //验证插入class
        if (!action.constructor || action.constructor.name != 'actionModel')
            throw new Error('pushAction err: action must be an actionModel class');

        action.localPath = this._localPath;
        this._actions.push(action);
    }
}

module.exports = controllerModel;
