
Page({
    data: {

    },

    onLoad: function (options) {
        this.getAllUser()
    },
    getAllUser() {
        var that = this;
        wx.cloud.database().collection('chat_user').get({
            success(res){
                that.setData({
                    user_list : res.data
                })
            }
        })
    }
})