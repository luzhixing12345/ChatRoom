// app.js
App({
  onLaunch() {
    
    wx.cloud.init({
      env:"kamilu-6gmo5kk9f4c8ceef"
    })
    if(wx.getStorageSync('userInfo')){
      this.globalData.userInfo = wx.getStorageSync('userInfo')
      console.log('get storage')
    }
  },
  globalData: {
    userInfo: null
  }
})
