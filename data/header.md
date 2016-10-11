API Document
==================
![jwi-logo](http://www.jwis.cn/web_file/images/logo2.png "jwi-logo")  
> Version: v0.0.1  
ModifyTime: 2016-10-09 10:50:17  
Host:
https://www.example.com/  

## 目录


[接口访问说明](#)
-----------------------
* 所有的请求，全部带上 `device-type` 请求头，值可为: `browser`, 或者 `mobile`
* 除`/api/public/common` 该控制器，其他所有的请求，都必须带上 `token`, 如果是浏览器，浏览器会自动把`token` 上传回服务器， 如果是手机，需要手动添加 一个 名为 `token` 的 `header`

[错误处理](#)
------------------------
* HTTP 协议定义的错误 (500-530)  
  500-530 : 通用服务器错误，Eg: 501， 502  
  500:服务器异常,ServerError  
* 自定义公共的错误(530-550)  
  530-550:自定义常规错误，Eg: ActionNotFound,ParameterError  
  531:ParameterError, 参数错误  
  532:ActionNotFound,为找到对应的Action  
  533:缺少token,TokenMissing  
  534:未找到控制器,ControllerNotFound  
  535:请求的URL不合法,RequestUrlNotMatch  
  536:请求的 content-type 类型不合法,ContentTypeNotCorrect  
* 自定义错误，只要同一接口中不重复即可(550-600)  
  550-600:自定义错误, 用户名或密码不正确，特定的业务错误  

