const app = getApp()

Page({
    data: {

    },

    onLoad() {
        
        this.setData({
            userInfo : app.globalData.userInfo
        })
    },
    onShow() {
        
        this.setData({
            userInfo : app.globalData.userInfo
        })
        this.loadUser()
        this.getMyfriend()
    },
    loadUser() {
        var that = this;
        wx.cloud.database().collection('chat_user').where({
            account_id : that.data.userInfo.account_id,
            password: that.data.userInfo.password
        }).get({
            success(res) {
                console.log(res)
                // 更新数据 拿到 _id
                app.globalData.userInfo = res.data[0]
                that.setData({
                    userInfo: app.globalData.userInfo
                })
            }
        })
    },


    getMyfriend() {
        var that = this;
        const DB = wx.cloud.database().command;
        wx.cloud.database().collection('chat_record').where(
            DB.or([
                {
                    userA_id: that.data.userInfo._id,
                    friend_status: true
                },
                {
                    userB_id: that.data.userInfo._id,
                    friend_status: true
                }
            ])
        ).get({
            success(res){
                console.log(res)
                that.setData({
                    my_friends : res.data
                })
            }
        })
    },

    startChat(e) {

        var index = e.currentTarget.dataset.index;
        console.log(this.data.my_friends)
        wx.navigateTo({
          url: '/pages/chat/chat?id=' + this.data.my_friends[index]._id
        })
        
    }
})