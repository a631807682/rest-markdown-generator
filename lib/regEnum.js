//正则
let regEnum = {
    //文档注释集合
    note: /([^/{2}]|^)\/\*{2}([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g,
    //controller值
    controller: /\@controller\s*-([^*]*)+/,
    //action值
    action: /\@action\s*([^*]*)+/,
    //action-method值
    method: /\@method\s*([^*]*)+/,
    //action-params集合
    params: /\@param([^*])+/g,
    //action-params内容 如：{string} userId - 当前用户编号
    paramValue: /\@param\s([^*]*)+/,
    //action-param类型 如：string
    paramType: /\{([^*]*)\}/,
    //action-param名称
    paramName: /\s([^*]*)\-/,
    //action-param说明
    paramMemo: /\-([^*]*)/,
    //action-return内容 如：{object} - 应用
    return: /\@return\s([^*]*)+/,
    //action-return类型 如：object
    returnType: /\{([^*]*)\}\s\-/,
    //action-return说明 如：应用
    returnMemo: /\-([^*]*)/,
};

module.exports = regEnum;
