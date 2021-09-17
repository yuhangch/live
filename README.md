# 🥰 Live.

~~一个快速、简洁、安全、数据全控制的无后端微博客~~

一个简陋的微博客页

## 灵感来自
- [giki.app](https://giki.app) 一款简单、安全、功能强大的日记应用。
- [valinejs](https://valine.js.org) 一款快速、简洁且高效的无后端评论系统。

## 如何工作的

推文数据存储于 [Leancloud](http://leancloud.cn/) 
的 [数据存储](https://leancloud.cn/docs/storage_overview.html) 中（使用和 [valinejs](https://valine.js.org) 一致的方式），使用 [react](https://github.com/facebook/react) 和 [antd](https://ant.design/components/overview-cn/) 实现推文数据展示页面。


## 使用

### 1.创建Leancloud应用

在 Leancloud 创建一个开发版 App，获取`AppID`和`AppKey`，绑定域名后获取服务器地址。
> 具体可参考：https://leancloud.cn/docs/sdk_setup-js.html#hash20935048

在`src/conf.js`中修改 Leancloud 相关配置。
```
applicationId : "your-app-id",
applicationKey : "your-app-key",
serverURL:"https://your-api.address",
```
### 2.创建Tweet类

在 Leancloud App >> 数据存储 >> 结构化数据中新建 class : `Tweet` ,结构如下：

|  content   | tags  | likes|
|  ----  | ----  | ----|
| string  | array | number |
（可选）：配置权限

#### 1）在内建账户中建立一个账户。

####  2）权限设置

##### class 访问权限

 |  操作   | 权限  | 
 |  ----  | ----  | 
 | add_fields  | 指定用户 | 
 | create  | 指定用户 | 
 | delete  | 指定用户 | 
 | update| 所有用户 | 
 | find| 所有用户 | 
 | get| 所有用户 | 
由于`likes`字段需要在前端更新，因此开放了 update 操作给所有用户，对其他字段的修改在下面限制。

##### 默认ACL权限

|  操作   | 权限  |
|  ----  | ----  |
| read  | 所有用户 |
| write  | 所有用户 |

同样由于`likes`字段的更新问题，write 权限也不得不开放。

##### 列权限

|  列   | 客户端不可见  | 只读|
 |  ----  | ----  | ----  | 
| ACL  | ✔ | | 
| content  |  |✔ | 
| tags  |  | ✔| 
| likes  | | | 
| createdAt  |  | | 
| updatedAt  |  | | 

#####  3） 设置>>安全中心>>配置WEB安全域名
### 3. 新建一条记录
- content: 第一条live😍
- likes: 0
- tags: ["打招呼"]
### 4. 其他配置
- [Favicon Generator](https://realfavicongenerator.net/) 生成一套favicon替换到`public/`
- 修改`public/index.html`中的 title,keywords,descriptions。
- ···
### 5. 预览项目
```shell
git clone https://github.com/yuhangch/live.git
cd live && yarn install
yarn start
```
能看到创建的"第一条live😍"，就大功告成了。
### 6. 部署项目

```shell
yarn build
```
将生成的静态文件部署到任何地方吧！


## 如何新增内容
- 在 Leancloud 的 [控制台](https://console.leancloud.cn/) 中新建（听上去很蠢，实操起来还可以接受 **[又不是不能用.jpg]** ） 
- 做个客户端：使用 [oclif](https://github.com/oclif/oclif) 实现了一个简单的客户端 [live-cli](https://github.com/yuhangch/live-cli) ,供大家参考。
