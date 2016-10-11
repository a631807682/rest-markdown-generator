IProcess API Document
==================
![jwi-logo](http://www.jwis.cn/web_file/images/logo2.png "jwi-logo")  
> Version: v0.0.1  
ModifyTime: 2016-10-09 10:50:17  
Host:
https://market.cynomys.jwis.cn:3000/  

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


[建筑物模块](#建筑物模块)
-----------------
## 创建建筑物

### 路径
 - path：`/api/map/building/create`
 - method：post

### 参数

#### Building
 - 类型：object
 - 描述：创建建筑物

#### factoryId
 - 类型：string
 - 描述：工厂的ID

#### name
 - 类型：string
 - 描述：工厂建筑物名字（例如A栋）

#### mapX
 - 类型：string
 - 描述：工厂的纬度

#### mapY
 - 类型：string
 - 描述：工厂的建经度



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 删除建筑物

### 路径
 - path：`/api/map/building/destroy`
 - method：post

### 参数

#### Building
 - 类型：object
 - 描述：删除建筑物

#### _id
 - 类型：int
 - 描述：建筑物的ID



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 更新建筑物

### 路径
 - path：`/api/map/building/update`
 - method：post

### 参数

#### Building
 - 类型：object
 - 描述：待更新的建筑物

#### factoryId
 - 类型：int
 - 描述：工厂的ID

#### [_id]
 - 类型：int
 - 描述：建筑物的ID（必填）

#### [name]
 - 类型：string
 - 描述：建筑物的名字

#### [mapX]
 - 类型：string
 - 描述：工厂的纬度

#### [mapY]
 - 类型：string
 - 描述：工厂的建经度



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 查询建筑物

### 路径
 - path：`/api/map/building/read`
 - method：post

### 参数

#### [factoryId]
 - 类型：string
 - 描述：工厂的ID

#### [name]
 - 类型：string
 - 描述：工厂建筑物的名字

#### [mapX]
 - 类型：string
 - 描述：工厂的纬度

#### [mapY]
 - 类型：string
 - 描述：工厂的建经度



### 返回值
 - 类型：Array
 - 描述：工厂和建筑物的信息
 - 示例：
```

```
## 获取个人模式建筑信息

### 路径
 - path：`/api/map/building/getPersonalBuildings`
 - method：get

### 参数

#### factoryId
 - 类型：int
 - 描述：工厂编号



### 返回值
 - 类型：Array
 - 描述：建筑信息及验证单维修单数量
 - 示例：
```

```
## 获取管理模式建筑信息

### 路径
 - path：`/api/map/building/getManagerBuildings`
 - method：get

### 参数

#### factoryId
 - 类型：int
 - 描述：工厂编号



### 返回值
 - 类型：Array
 - 描述：建筑信息及验证单维修单数量(总数 通过 不通过 待验证)
 - 示例：
```

```

[工厂模块](#工厂模块)
-----------------
## 创建工厂的信息

### 路径
 - path：`/api/map/factory/create`
 - method：post

### 参数

#### Factory
 - 类型：object
 - 描述：工厂的信息

#### name
 - 类型：string
 - 描述：工厂的名字

#### mapX
 - 类型：string
 - 描述：工厂的纬度

#### mapY
 - 类型：string
 - 描述：工厂的经度



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 更新工厂的信息

### 路径
 - path：`/api/map/factory/update`
 - method：post

### 参数

#### Factory
 - 类型：object
 - 描述：工厂的信息

#### _id
 - 类型：int
 - 描述：工厂的ID

#### [name]
 - 类型：string
 - 描述：工厂的名字

#### [mapX]
 - 类型：string
 - 描述：工厂的纬度

#### [mapY]
 - 类型：string
 - 描述：工厂的经度



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 删除工厂

### 路径
 - path：`/api/map/factory/destroy`
 - method：post

### 参数

#### _id
 - 类型：int
 - 描述：工厂的ID

#### [name]
 - 类型：string
 - 描述：工厂的名字



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 查询工厂的信息

### 路径
 - path：`/api/map/factory/read`
 - method：post

### 参数

#### [_id]
 - 类型：int
 - 描述：工厂的ID

#### [name]
 - 类型：string
 - 描述：工厂的名字



### 返回值
 - 类型：object
 - 描述：工厂的详细信息
 - 示例：
```

```
## 获取个人模式工厂信息

### 路径
 - path：`/api/map/factory/getPersonalFactories`
 - method：get

### 参数



### 返回值
 - 类型：Array
 - 描述：工厂信息及验证单维修单数量
 - 示例：
```

```
## 获取管理员模式工厂信息

### 路径
 - path：`/api/map/factory/getManagerFactories`
 - method：get

### 参数



### 返回值
 - 类型：Array
 - 描述：工厂信息及验证单维修单数量（总数 通过 不通过 待验证）
 - 示例：
```

```
## 获取工厂及建筑信息

### 路径
 - path：`/api/map/factory/getFactoriesWithBuildings`
 - method：get

### 参数



### 返回值
 - 类型：Array
 - 描述：工厂及建筑信息
 - 示例：
```

```

[附件管理](#附件管理)
-----------------
## 文件上传

### 路径
 - path：`/api/public/attachment/upload`
 - method：post

### 参数

#### module
 - 类型：string
 - 描述：文件所述模块, 例如：module=sys

#### files
 - 类型：file[]
 - 描述：上传的文件，多个



### 返回值
 - 类型：string
 - 描述：以逗号分割的附件ID, 例如：1,2,3
 - 示例：
```

```
## 文件下载

### 路径
 - path：`/api/public/attachment/download`
 - method：get

### 参数

#### id
 - 类型：int
 - 描述：要下载的附件 id



### 返回值
 - 类型：stream
 - 描述：返回的文件流
 - 示例：
```

```

[通用](#通用)
-----------------
## 登录

### 路径
 - path：`/api/public/common/login`
 - method：post

### 参数

#### account
 - 类型：string
 - 描述：用户名

#### password
 - 类型：string
 - 描述：密码, 注意 密码和 短信动态密码为2选一，传了密码，就不要传 动态验证码

#### tempPassword
 - 类型：string
 - 描述：短信动态验证码



### 返回值
 - 类型：无
 - 描述：用户信息(id,name...), 如果是浏览器登录，还会返回一个cookie, 名字叫token 有效期为1个月, 如果是手机登录，token 就包含在user中,isManager表示是否为管理员
 - 示例：
```

```

[用户](#用户)
-----------------
## 退出

### 路径
 - path：`/api/public/user/logout`
 - method：post

### 参数

#### deviceType
 - 类型：string
 - 描述：设备类型, browser 或者  mobile



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 用户菜单

### 路径
 - path：`/api/public/user/menus`
 - method：post

### 参数



### 返回值
 - 类型：object
 - 描述：用户信息，权限，菜单的对象
 - 示例：
```

```

[维修工厂管理](#维修工厂管理)
-----------------
## 查询工厂

### 路径
 - path：`/api/repairList/factory/read`
 - method：get

### 参数



### 返回值
 - 类型：无
 - 描述：本次查询所有数据量
 - 示例：
```

```

[维修工厂楼层管理](#维修工厂楼层管理)
-----------------
## 查询楼层

### 路径
 - path：`/api/repairList/factoryBuilding/read`
 - method：get

### 参数

#### factoryID
 - 类型：int
 - 描述：工厂的ID



### 返回值
 - 类型：Array
 - 描述：本次查询数据
 - 示例：
```

```

[维修单列表(author:zhikui)](#维修单列表(author:zhikui))
-----------------
## 查询维修单

### 路径
 - path：`/api/repairList/factoryTask/read`
 - method：get

### 参数

#### [skip=0]
 - 类型：int
 - 描述：跳过数目

#### [take=10]
 - 类型：int
 - 描述：获取条数（每页显示条目数量)

#### [factoryLayers=3]
 - 类型：string
 - 描述：工厂的楼层

#### [type=]
 - 类型：string
 - 描述：type不传等于待维修和维修中的，传[2]=维修单记录

#### [factoryId=]
 - 类型：string
 - 描述：工厂id，不传只楼栋，传了默认查工厂

#### [model=]
 - 类型：string
 - 描述：model不传个人模式，传1等于管理员模式



### 返回值
 - 类型：object
 - 描述：分页数据
 - 示例：
```

```
## 查询维修单维修方案

### 路径
 - path：`/api/repairList/factoryTask/read`
 - method：get

### 参数

#### [taskId=3]
 - 类型：int
 - 描述：工厂的楼层



### 返回值
 - 类型：无
 - 描述：本次查询的数据
 - 示例：
```

```

[方案库模块](#方案库模块)
-----------------
## 获取维修方案

### 路径
 - path：`/api/repairList/plan/getPlan`
 - method：get

### 参数

#### propertyIds
 - 类型：String
 - 描述：所选的维修属性编号集合 如：'?propertyIds=24,27,30,32,34'

#### deviceNumber
 - 类型：int
 - 描述：维修的数量



### 返回值
 - 类型：Object
 - 描述：维修方案
 - 示例：
```

```
## 保存维修方案指导书

### 路径
 - path：`/api/repairList/plan/saveInstructionBook`
 - method：post

### 参数

#### taskId
 - 类型：int
 - 描述：所选的维修单编号

#### content
 - 类型：Array} content - 指导书内容 如:[{"key" : "人员资质要求","value" : "初级"}, {"key" : "设备","value" : "无"
 - 描述：指导书内容 如:[{"key" : "人员资质要求","value" : "初级"}, {"key" : "设备","value" : "无"}..... ]

#### taskTime
 - 类型：int
 - 描述：工时

#### deviceNumber
 - 类型：int
 - 描述：维修数量

#### images
 - 类型：Array
 - 描述：图片 如:[1,4,7]



### 返回值
 - 类型：Object
 - 描述：无
 - 示例：
```

```
## 发送维修方案指导书

### 路径
 - path：`/api/repairList/plan/sendInstructionBook`
 - method：post

### 参数

#### taskId
 - 类型：int
 - 描述：所选的维修单编号



### 返回值
 - 类型：Object
 - 描述：无
 - 示例：
```

```
## 获取维修方案指导书

### 路径
 - path：`/api/repairList/plan/getInstructionBook`
 - method：get

### 参数

#### taskId
 - 类型：int
 - 描述：所选的维修单编号



### 返回值
 - 类型：Object
 - 描述：无
 - 示例：
```

```

[维修单属性模块](#维修单属性模块)
-----------------
## 获取维修单属性选项

### 路径
 - path：`/api/repairList/taskProperty/getPropertys`
 - method：get

### 参数



### 返回值
 - 类型：Array
 - 描述：维修单属性选项
 - 示例：
```

```

[用户模块](#用户模块)
-----------------
## 分页获取用户(转接选人)

### 路径
 - path：`/api/sys/user/getUsers`
 - method：get

### 参数

#### take
 - 类型：int
 - 描述：获取条数

#### skip
 - 类型：int
 - 描述：跳过条数



### 返回值
 - 类型：Array
 - 描述：用户id,账号,名字[{id:123,account:976904194@qq.com,name:lijingwen}...]
 - 示例：
```

```
## 获取用户信息

### 路径
 - path：`/api/sys/user/getUserInfo`
 - method：get

### 参数



### 返回值
 - 类型：Object
 - 描述：用户信息
 - 示例：
```

```

[获取checkList](#获取checkList)
-----------------
## 获取checklist信息

### 路径
 - path：`/api/verify/checkList/getVerificationList`
 - method：post

### 参数

#### verificationId
 - 类型：Number
 - 描述：验证单id



### 返回值
 - 类型：Object
 - 描述：checklist列表 和 是否申请短流程
 - 示例：
```

```
## 更新任务的状态

### 路径
 - path：`/api/verify/checkList/updateVerificationList`
 - method：post

### 参数

#### verificationId
 - 类型：Number
 - 描述：验证单id

#### state
 - 类型：Number
 - 描述：任务的状态



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 获取checkList子项的详细信息

### 路径
 - path：`/api/verify/checkList/getCheckListInfo`
 - method：post

### 参数

#### _id
 - 类型：Number
 - 描述：子项ID



### 返回值
 - 类型：Array
 - 描述：子项的详细信息
 - 示例：
```

```
## 更新checkList子项的信息

### 路径
 - path：`/api/verify/checkList/updateCheckListInfo`
 - method：post 传json格式的数据

### 参数

#### _id
 - 类型：Number
 - 描述：子项ID

#### state
 - 类型：Number
 - 描述：子项的状态

#### [processImages]
 - 类型：Number
 - 描述：处理问题截图

#### [processMemo]
 - 类型：String
 - 描述：处理说明



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 保存转接

### 路径
 - path：`/api/verify/checkList/saveSwitch`
 - method：post

### 参数

#### _id
 - 类型：Number
 - 描述：任务id

#### checkList
 - 类型：array}  checkList - 转接项_id和被转接人userId[{_id:123,userId:456
 - 描述：转接项_id和被转接人userId[{_id:123,userId:456}...]



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```

[求助单](#求助单)
-----------------
## 新增一个求助单

### 路径
 - path：`/api/verify/help/createHelpList`
 - method：post

### 参数

#### verificationId
 - 类型：Number
 - 描述：验证单id

#### taskName
 - 类型：String
 - 描述：任务名称

#### secondTerm
 - 类型：String
 - 描述：第二项

#### helpInfo
 - 类型：String
 - 描述：求助信息

#### processImages
 - 类型：Number
 - 描述：图片id

#### professor
 - 类型：String
 - 描述：专家的名字

#### needHelpName
 - 类型：String
 - 描述：求助人的名字

#### [images]
 - 类型：Number
 - 描述：示例图



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 获取求助单列表

### 路径
 - path：`/api/verify/help/getHelpList`
 - method：get

### 参数

#### Name
 - 类型：String
 - 描述：专家的名字



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 获取求助单详情

### 路径
 - path：`/api/verify/help/getHelpDetail`
 - method：get

### 参数

#### _id
 - 类型：String
 - 描述：求助单_id



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 专家添加评语

### 路径
 - path：`/api/verify/help/updateResult`
 - method：post

### 参数

#### _id
 - 类型：String
 - 描述：求助单_id

#### result
 - 类型：String
 - 描述：专家评语



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```

[专家](#专家)
-----------------
## 获取专家列表

### 路径
 - path：`/api/verify/professor/getProfessorList`
 - method：get

### 参数



### 返回值
 - 类型：Object
 - 描述：getProfessorList列表
 - 示例：
```

```

[短流程](#短流程)
-----------------
## 申请短流程

### 路径
 - path：`/api/verify/shortProcedure/applyShortProcedure`
 - method：post

### 参数

#### content
 - 类型：string
 - 描述：问题内容

#### verificationId
 - 类型：int
 - 描述：验证单id



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```
## 查询短流程list

### 路径
 - path：`/api/verify/shortProcedure/getShortProcedureList`
 - method：get

### 参数

#### [page=0]
 - 类型：int
 - 描述：页数

#### [take=10]
 - 类型：int
 - 描述：获取条数（每页显示条目数量)

#### buildingId
 - 类型：int
 - 描述：建筑编号



### 返回值
 - 类型：Array
 - 描述：本次查询的数据
 - 示例：
```

```
## 查询短流程详情

### 路径
 - path：`/api/verify/shortProcedure/getShortProcedureDetails`
 - method：get

### 参数

#### _id
 - 类型：int
 - 描述：短流程任务id



### 返回值
 - 类型：Array
 - 描述：本次查询的数据
 - 示例：
```

```
## 保存短流程处理结果

### 路径
 - path：`/api/verify/shortProcedure/processingShortProcedure`
 - method：post

### 参数

#### _id
 - 类型：int
 - 描述：短流程任务id

#### itemIds
 - 类型：array} itemIds - 验证单子项集合,缺少的id作删除处理，逻辑删除，如:[{"id": 17, "sort": 5}, {"id": 65, "sort": 2
 - 描述：验证单子项集合,缺少的id作删除处理，逻辑删除，如:[{"id": 17, "sort": 5}, {"id": 65, "sort": 2}]



### 返回值
 - 类型：无
 - 描述：无
 - 示例：
```

```

[验证单](#验证单)
-----------------
## 统计验证单指定工厂下（5大分类）任务总数

### 路径
 - path：`/api/verify/verification/getCheckListTasks`
 - method：get

### 参数

#### factoryId
 - 类型：int
 - 描述：工厂编号（工厂id建筑id二选1）

#### buildingId
 - 类型：int
 - 描述：建筑编号



### 返回值
 - 类型：Array
 - 描述：本次查询的数据
 - 示例：
```

```
## 查询验证单指定工厂下（5大分类）的内容

### 路径
 - path：`/api/verify/verification/getCheckListContents`
 - method：get

### 参数

#### factoryId
 - 类型：int
 - 描述：工厂编号（工厂id建筑id二选1）

#### buildingId
 - 类型：int
 - 描述：建筑编号

#### categoryId
 - 类型：int
 - 描述：分类编号



### 返回值
 - 类型：Array
 - 描述：本次查询的数据
 - 示例：
```

```
## 获取建筑/工厂下管理员验证单

### 路径
 - path：`/api/verify/verification/getManagerCategoryNumber`
 - method：get

### 参数

#### [buildingId]
 - 类型：int
 - 描述：建筑编号（工厂id建筑id二选1）

#### [factoryId]
 - 类型：int
 - 描述：工厂编号



### 返回值
 - 类型：Array
 - 描述：获取工厂及建筑信息
 - 示例：
```

```
## 获取分类下和（建筑/工厂）下管理员验证单（带分页）

### 路径
 - path：`/api/verify/verification/getManagerVerification`
 - method：get

### 参数

#### categoryId
 - 类型：int
 - 描述：分类编号

#### [buildingId]
 - 类型：int
 - 描述：建筑编号（工厂id建筑id二选1）

#### [factoryId]
 - 类型：int
 - 描述：工厂编号

#### [pagination=pulldown]
 - 类型：string
 - 描述：类型:1.pulldown（下拉、获取历史）2.pullup（上拉、获取最新）

#### [time=date.now]
 - 类型：date
 - 描述：时间分割（下拉：时间以前的历史 上拉：时间以后的新记录）

#### [take=10]
 - 类型：int
 - 描述：获取记录条数 上拉不填



### 返回值
 - 类型：Array
 - 描述：获取工厂及建筑信息
 - 示例：
```

```
## 获取管理员建筑/工厂下历史验证单数量

### 路径
 - path：`/api/verify/verification/getManagerHistoryNumber`
 - method：get

### 参数

#### [buildingId]
 - 类型：int
 - 描述：建筑编号（工厂id建筑id二选1）

#### [factoryId]
 - 类型：int
 - 描述：工厂编号



### 返回值
 - 类型：Object
 - 描述：获取工厂及建筑信息
 - 示例：
```

```
## 获取任务详情(跳转到转接)

### 路径
 - path：`/api/verify/verification/getVerfiyInfo`
 - method：get

### 参数

#### taskId
 - 类型：int
 - 描述：任务id



### 返回值
 - 类型：json
 - 描述：任务详情,对应的checkList{task:{_id:123,name:验证单,number:20160507},checkList:[{_id:456,title:'长度>40mm',sort:1}...]}
 - 示例：
```

```
## 获取管理员建筑/工厂下历史验证单（带分页）

### 路径
 - path：`/api/verify/verification/getManagerHistory`
 - method：get

### 参数

#### [buildingId]
 - 类型：int
 - 描述：建筑编号（工厂id建筑id二选1）

#### [factoryId]
 - 类型：int
 - 描述：工厂编号

#### [pagination=pulldown]
 - 类型：string
 - 描述：类型:1.pulldown（下拉、获取历史）2.pullup（上拉、获取最新）

#### [time=date.now]
 - 类型：date
 - 描述：时间分割（下拉：时间以前的历史 上拉：时间以后的新记录）

#### [take=10]
 - 类型：int
 - 描述：获取记录条数 上拉不填



### 返回值
 - 类型：Array
 - 描述：获取工厂及建筑信息
 - 示例：
```

```
## 获取个人建筑/工厂下历史验证单（带分页）

### 路径
 - path：`/api/verify/verification/getPersonalHistory`
 - method：get

### 参数

#### [buildingId]
 - 类型：int
 - 描述：建筑编号（工厂id建筑id二选1）

#### [factoryId]
 - 类型：int
 - 描述：工厂编号

#### [pagination=pulldown]
 - 类型：string
 - 描述：类型:1.pulldown（下拉、获取历史）2.pullup（上拉、获取最新）

#### [time=date.now]
 - 类型：date
 - 描述：时间分割（下拉：时间以前的历史 上拉：时间以后的新记录）

#### [take=10]
 - 类型：int
 - 描述：获取记录条数 上拉不填



### 返回值
 - 类型：Array
 - 描述：获取工厂及建筑信息
 - 示例：
```

```

[验证单选项](#验证单选项)
-----------------
