
const app = getApp()

Page({
  data: {
      
  },
  onshow() {
  },
  getUserProfile(e) {

    var that = this;
    wx.getUserProfile({
      desc: '展示信息',
      success: (res) => {
        console.log(res)
        that.setData({
          userInfo: res.userInfo
        })
        wx.showToast({
          title: '已授权',
          duration: 500
        })
        app.globalData.userInfo = res.userInfo
        console.log(app.globalData.userInfo)
      }
    })
  },

  onLoad: function(options){
    console.log(app.globalData.userInfo);
    this.setData({
        userInfo: app.globalData.userInfo
    })
  },
  getUserAccount(e) {
    this.setData({
      account_id : e.detail.value
    })
  },
  getUserPassword(e) {
    this.setData({
      ps1 : e.detail.value
    })
  },
  confirmUserPassword(e) {
    this.setData({
      ps2 : e.detail.value
    })
  },

  register() {
    if (this.data.ps1 != this.data.ps2) {
      wx.showToast({
        icon :'none',
        title: '密码不相同',
      })
      return
    }
    var that = this;
    var Uid = Date.now();
    wx.cloud.database().collection('chat_user').add({
      data:{
        Uid: Uid,
        avatarUrl: that.data.userInfo.avatarUrl,
        nickName: that.data.userInfo.nickName,
        account_id: that.data.account_id,
        password: that.data.ps2
      },
      success(res){
        console.log(res)
        wx.showToast({
          title: '注册成功',
        }),
        app.globalData.userInfo.account_id = that.data.account_id;
        app.globalData.userInfo.password = that.data.password;
        app.globalData.userInfo.Uid = Uid;
        wx.switchTab({
          url: '/pages/message/message',
        })
      }
    })
  }
})
