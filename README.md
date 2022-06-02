# 微信小程序 - 在线聊天

<div align=center><img src="https://raw.githubusercontent.com/learner-lu/picbed/master/ad.jpg" height="300" alt="抚子妹妹"></div>

## 简介

参考[小程序实现微信聊天QQ聊天、加好友聊天，小程序在线聊天](https://www.bilibili.com/video/BV1Gf4y1M7sh?p=3&spm_id_from=pageDriver)

## 项目演示

搜索微信小程序: 聊天室kamilu

## 使用方法

- 进入[微信小程序官网](https://mp.weixin.qq.com/cgi-bin/wx)
- 注册,登录
- 获取AppID

  ![20220525231716](https://raw.githubusercontent.com/learner-lu/picbed/master/20220525231716.png)

- 替换 `sources/project.config.json` 中的"appid" 为你的appid

- 使用[微信开发者工具](http://www.ionic.wang/weixin/devtools/download.html)打开sources文件夹

- 复制云开发环境ID,替换app.js中的 env:"kamilu-3g69c1hh0c963d36"

  ![20220530231731](https://raw.githubusercontent.com/learner-lu/picbed/master/20220530231731.png)

- 新建数据库表, `chat_user` 和 `chat_record` ,数据权限改为所有的人可读写

  ![20220530232831](https://raw.githubusercontent.com/learner-lu/picbed/master/20220530232831.png)
