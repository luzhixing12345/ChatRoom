
const app = getApp()

Page({
  data: {
      
  },

  onLoad() {
    this.setData({
        userInfo: app.globalData.userInfo
     })
  }
  
})
