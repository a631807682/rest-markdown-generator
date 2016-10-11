rest-markdown-generator
=====================

项目文档注释生成README.md文件

---------------------------

### 文档目录格式
* area1
    * controller1.js
    * controller2.js
* area2
    * controller3.js
    
### 文档注释格式
```
/**
 * @action actionName  - action描述
 * @method get
 * @param {type} paramName1 - 参数描述
 * @param {type} paramName2 - 参数描述
 * @return {array} - 结果描述
 */
 ```
### 使用方式

#### 全局安装
> npm install https://github.com/a631807682/rest-markdown-generator -g  

#### node项目下运行
> rest-markdown-generator

#### 运行结果
项目下生成rmg-temp-README.md文件
