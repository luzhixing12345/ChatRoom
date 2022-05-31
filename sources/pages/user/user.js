
const app = getApp()

Page({
  data: {
      
  },

  onShow() {
    this.setData({
      userInfo: app.globalData.userInfo
   })
  },

  onLoad() {
    this.setData({
        userInfo: app.globalData.userInfo
     })
  },
  changeUser() {
    app.globalData.userInfo = null;
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }  
})
