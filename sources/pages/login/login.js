
const app = getApp()

Page({
  data: {
      
  },
  onLoad() {
    
  },
  
  getUserAccount(e) {
    this.setData({
      account_id : e.detail.value
    })
  },
  getUserPassword(e) {
    this.setData({
      password : e.detail.value
    })
  },
  login() {
      var that = this;
      wx.cloud.database().collection('chat_user').where({
        account_id: that.data.account_id,
        password: that.data.password
      }).get({
          success(res) {
              console.log(res)
              if(res.data.length>0){
                  app.globalData.userInfo = res.data[0]
                  wx.setStorageSync('userInfo', res.data[0])
                  wx.switchTab({
                    url: '/pages/message/message',
                    success(res){
                        wx.showToast({
                          title: '登陆成功',
                        })
                    }
                  })
              } else {
                  wx.showToast({
                    icon: 'none',
                    title: '账号密码错误',
                  })
              }
          }
          
      })
  },


  toRegister() {
      wx.navigateTo({
        url: '/pages/register/register',
      })
  },

  
})
