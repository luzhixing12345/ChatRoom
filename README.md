# 微信小程序 - 在线聊天

## 简介

一个聊天功能的的DEMO, 如果想要在微信小程序中加入实时聊天功能可以快速使用

![扫码_搜索联合传播样式-标准色版](https://raw.githubusercontent.com/learner-lu/picbed/master/%E6%89%AB%E7%A0%81_%E6%90%9C%E7%B4%A2%E8%81%94%E5%90%88%E4%BC%A0%E6%92%AD%E6%A0%B7%E5%BC%8F-%E6%A0%87%E5%87%86%E8%89%B2%E7%89%88.png)

## 运行演示

![ASD23242](https://raw.githubusercontent.com/learner-lu/picbed/master/ASD23242.gif)

## CHANGELOG

- 第一版 : [视频演示](https://www.bilibili.com/video/BV1CW4y1C7uf)
- 第二版 : 新增了部分功能,优化了界面,优化了用户体验
- 第三版 ：修复了用户昵称重复的导致聊天混乱的问题 (当前版本)

## 使用方法

- 进入[微信小程序官网](https://mp.weixin.qq.com/cgi-bin/wx),注册,登录
- 获取你的AppID

  ![20220525231716](https://raw.githubusercontent.com/learner-lu/picbed/master/20220525231716.png)

- 替换 `sources/project.config.json` 中的"appid" 为你的appid
- 使用[微信开发者工具](http://www.ionic.wang/weixin/devtools/download.html)打开根目录
- 复制你的云开发环境ID,替换 `app.js` 中的env环境名

  ```js
  wx.cloud.init({
      env:"kamilu-6gmo5kk9f4c8ceef"
    })
  ```

  ![20220530231731](https://raw.githubusercontent.com/learner-lu/picbed/master/20220530231731.png)

- 新建数据库表, `chat_user` 和 `chat_record` ,数据权限改为所有的人可读写

  ![20220530232831](https://raw.githubusercontent.com/learner-lu/picbed/master/20220530232831.png)

- 全部清除缓存，重新编译此项目,开始聊天吧!

## 关于

### 关于账号

目前开通了三个账号 `kamilu` `大老师` `aniya`,密码都是123,您可自行测试

出于设计和测试的方便（我没有用两个微信来回测试，太麻烦了），设计使用账号密码的形式来注册而不是微信账号绑定。所以整个程序使用 `_id` 而不是 `_openid`

### 关于代码实现

chat模块使用了scroll-view,设置scroll-into-view="{{scrollLast}}"使得每次进入聊天页面都可以移动到最下方,即`<view id="toView" class="test"></view>`的位置

输入框使用了handleInput实现防抖

聊天方式使用了watch实现实时通信

上传图片更新头像使用了wx.chooseMedia处理,其中

```js
cloudPath: app.globalData.userInfo.account_id + count + ".png",
```

count是上传次数,用于处理用户多次上传头像的情况,只修改图片内容而数据库中图片名称不变微信小程序并不会更新

代码中很大一部分使用了_id作为key值,可以使用_openid

这是一个练手项目,现在看来设计的并不是那么完美,权且当作学习过程吧

文字使用了如下css实现了换行,填充等

```css
text {
  font-size: 30rpx;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-line;
}
```

message模块使用了如下css实现了多余文字隐藏

```css
white-space : nowrap;
text-overflow:ellipsis;
```
