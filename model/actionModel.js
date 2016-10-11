/*
    action文档数据模型
 */
class actionModel {
    constructor() {
        this._params = [];
    }

    get path() {
        return this._path;
    }

    get memo() {
        return this._memo;
    }

    get method() {
        return this._method;
    }

    get params() {
        return this._params;
    }

    get returnType() {
        return this._returnType;
    }

    get returnMemo() {
        return this._returnMemo;
    }

    //说明
    set memo(value) {
        this._memo = value.trim();
    }

    set name(value) {
        this._name = value.trim();
    }

    set localPath(value) {
        this._localPath = value;
        this._path = value + this._name;
    }

    set method(value) {
        this._method = value.trim();
    }

    pushParam(param) {
        if (!param.constructor || param.constructor.name != 'paramModel')
            throw new Error('pushAction err: action must be an actionModel class');
        this._params.push(param);
    }

    set returnType(value) {
        this._returnType = value.trim();
    }

    set returnMemo(value) {
        this._returnMemo = value.trim();
    }

}

module.exports = actionModel;
