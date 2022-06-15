# 微信小程序 - 在线聊天

## 简介

参考[小程序实现微信聊天QQ聊天、加好友聊天，小程序在线聊天](https://www.bilibili.com/video/BV1Gf4y1M7sh?p=3&spm_id_from=pageDriver)

## 上手体验

![扫码_搜索联合传播样式-标准色版](https://raw.githubusercontent.com/learner-lu/picbed/master/%E6%89%AB%E7%A0%81_%E6%90%9C%E7%B4%A2%E8%81%94%E5%90%88%E4%BC%A0%E6%92%AD%E6%A0%B7%E5%BC%8F-%E6%A0%87%E5%87%86%E8%89%B2%E7%89%88.png)

## 基本功能演示  |  [视频演示](https://www.bilibili.com/video/BV1CW4y1C7uf)

![function](https://raw.githubusercontent.com/learner-lu/picbed/master/function.gif)

## 使用方法

- 进入[微信小程序官网](https://mp.weixin.qq.com/cgi-bin/wx)
- 注册,登录
- 获取AppID

  ![20220525231716](https://raw.githubusercontent.com/learner-lu/picbed/master/20220525231716.png)

- 替换 `sources/project.config.json` 中的"appid" 为你的appid

- 使用[微信开发者工具](http://www.ionic.wang/weixin/devtools/download.html)打开sources文件夹

- 复制云开发环境ID,替换app.js中的 env:""

  ![20220530231731](https://raw.githubusercontent.com/learner-lu/picbed/master/20220530231731.png)

- 新建数据库表, `chat_user` 和 `chat_record` ,数据权限改为所有的人可读写

  ![20220530232831](https://raw.githubusercontent.com/learner-lu/picbed/master/20220530232831.png)

## 结语

这个项目是一个学习微信小程序的练手项目,代码写的有写糟糕,变量名函数名,数据库的项很多都没有提前考虑,写的时候也是犹犹豫豫修修改改.

不过好在基本功能实现了,聊天对话都没什么问题,不过还有一些bug,比如说互相添加好友,多次更新头像,数据传输不稳定等等诸多问题.

本项目采用MIT开源协议,您可随意修改/使用
