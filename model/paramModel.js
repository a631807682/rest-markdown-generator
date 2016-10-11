/*
    param文档数据模型
 */
class paramModel {
    constructor() {}

    get type() {
        return this._type;
    }
    get name() {
        return this._name;
    }
    get memo() {
        return this._memo;
    }

    set type(value) {
        this._type = value.trim();
    }

    set name(value) {
        this._name = value.trim();
    }
    set memo(value) {
        this._memo = value.trim();
    }
}

module.exports = paramModel;
