
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
     console.log(app.globalData.userInfo._id)
  },
  changeUser() {
    app.globalData.userInfo = null;
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  changeUserAvater() {
    let a = this;
    wx.showActionSheet({
        itemList: [ "从相册中选择", "拍照" ],
        itemColor: "#f7982a",
        success: function(e) {
        //album:相册   //camera拍照
            e.cancel || (0 == e.tapIndex ? a.chooseWxImageShop("album") : 1 == e.tapIndex && a.chooseWxImageShop("camera"));
        }
    });
  },
  //a：选择的类型  //album:相册   //camera拍照
  chooseWxImageShop: function(a) {
  var e = this;
  wx.chooseImage({
      sizeType: [ "original", "compressed" ],
      sourceType: [ a ],//类型
      count:1,
      success: function(a) {
          if(a.tempFiles[0].size> 2097152){
              wx.showModal({
                  title: "提示",
                  content: "选择的图片过大，请上传不超过2M的图片",
                  showCancel: !1,
                  success: function(a) {
                      a.confirm;
                  }
              })
          }else{
              //把图片上传到服务器
              e.upload_file(a.tempFilePaths[0])
          }
      }
  });
  },
    upload_file: function(e) {
      var newAvatarFileUrl;
      wx.showLoading({
          title: "上传中"
      });
      wx.cloud.uploadFile({
          filePath: e,//图片路径
          cloudPath: app.globalData.userInfo.account_id + ".png",
          success(res) {
              // console.log()
              // console.log(cloudPath)
              console.log(res.fileID)
              newAvatarFileUrl = res.fileID
              wx.hideLoading();
              wx.showToast({
                  title: "上传成功",
                  icon: "success",
                  duration: 3000
              });
          },
          fail: function(a) {
              wx.hideLoading();
              wx.showToast({
                  title: "上传失败",
                  icon: "none",
                  duration: 3000
              });
          }
      });
      console.log(newAvatarFileUrl)
      this.updateAvatar(newAvatarFileUrl)
    },
    updateAvatar(url) {
      console.log(app.globalData.userInfo._id)
      wx.cloud.database().collection('chat_user').doc(app.globalData.userInfo._id).update({
          data :{
            avatarUrl : url
          },
          success(res) {
            console.log(res)
            wx.showToast({
              title: '头像更新成功',
            })
          }
      })
    }
})
