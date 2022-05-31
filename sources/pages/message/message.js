const app = getApp()

Page({
    data: {

    },

    onLoad: function (options) {
        
    },
    onShow() {
        this.getMyfriend(),
        this.setData({
            userInfo : app.globalData.userInfo
        })
    },
    getMyfriend() {
        var that = this;
        const DB = wx.cloud.database().command;
        wx.cloud.database().collection('chat_record').where(
            DB.or([
                {
                    userA_id:app.globalData.userInfo._id,
                    friend_status: true
                },
                {
                    userB_id:app.globalData.userInfo._id,
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

        wx.navigateTo({
          url: '/pages/chat/chat?id=' + this.data.my_friends[index]._id
        })
        
    }
})