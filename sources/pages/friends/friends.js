
const app = getApp()

Page({

    data: {
        
    },
    onShow() {
        this.getAllUser(),
        this.getNewFriends(),
        this.getMyfriend(),
        this.setData({
            userInfo : app.globalData.userInfo
        })
    },

    onLoad: function (options) {
        
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
    },
    addFriend(e) {
        var index = e.currentTarget.dataset.index;
        var that = this;
        wx.cloud.database().collection('chat_record').add({
            data:{
                userA_id : app.globalData.userInfo._id,
                userA_avatarUrl: app.globalData.userInfo.avatarUrl,
                userA_account_id : app.globalData.userInfo.account_id,

                userB_id : that.data.user_list[index]._id,
                userB_avatarUrl : that.data.user_list[index].avatarUrl,
                userB_account_id : that.data.user_list[index].account_id,

                record : [],
                friend_status : false
            },
            success(res) {
                console.log(res)
            }
        })
    },
    getNewFriends() {
        var that = this;
        wx.cloud.database().collection('chat_record').where({
            userB_id: app.globalData.userInfo._id,
            friend_status : false
        }).get({
            success(res) {
                console.log(res);
                that.setData({
                    new_friends : res.data
                })
            }
        })
    },
    acceptNewFriend(e) {
        var index = e.currentTarget.dataset.index;
        var that =  this;
        wx.cloud.database().collection('chat_record').doc(that.data.new_friends[index]._id).update({
            data:{
                friend_status: true
            },
            success(res) {
                console.log(res)
            }
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
    }
})