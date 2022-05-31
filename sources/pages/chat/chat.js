
const app = getApp()

const utils = require("../../utils/util")

Page({


    data: {
        inputValue : "",
    },

    onLoad :function (options) {
        this.setData({
            recordId : options.id,
            userInfo : app.globalData.userInfo
        })
        this.getChatList()
        this.getFriendInfo()
    },

    onshow: function (options) {
        this.getChatList()
    },

    publishMessage(){
        var that = this;
        wx.cloud.database().collection('chat_record').doc(that.data.recordId).get({
            success(res) {
                console.log(res)
                var record = res.data.record;

                var msg = {}
                msg.id = app.globalData.userInfo._id
                msg.text = that.data.inputValue
                msg.time = utils.formatTime(new Date())

                console.log(msg)
                record.push(msg)
                console.log(record)
                wx.cloud.database().collection('chat_record').doc(that.data.recordId).update({
                    data: {
                        record : record
                    },
                    success(res) {
                        console.log(res)
                        wx.showToast({
                          title: '发送成功',
                        })

                        that.getChatList(),
                        that.setData({
                            inputValue : ''
                        })
                    }
                
                })
            }
        })
    },


    getInputValue(e) {
        this.data.inputValue = e.detail.value
    },

    getChatList() {
        var that = this;
        wx.cloud.database().collection('chat_record').doc(that.data.recordId).get({
            success(res) {
                console.log(res.data)
                that.setData({
                    chatList: res.data.record
                })
            }
        })
    },
    getFriendInfo() {
        var that = this;
        var friend_account_id,friend_avatarUrl;
        wx.cloud.database().collection('chat_record').doc(that.data.recordId).get({
            success(res) {
                console.log(res)
                if (that.data.userInfo._id==res.data.userA_id){
                    
                    friend_account_id = res.data.userB_account_id;
                    friend_avatarUrl = res.data.userB_avatarUrl;
                    console.log("A")
                    
                } else {
                    console.log("B")
                    friend_account_id = res.data.userA_account_id
                    friend_avatarUrl = res.data.userA_avatarUrl
                }
                wx.setNavigationBarTitle({
                    title: friend_account_id
                })
                that.setData({
                    friend_account_id: friend_account_id,
                    friend_avatarUrl : friend_avatarUrl
                })
                
            }
        })

    }

})