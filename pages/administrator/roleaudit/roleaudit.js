// pages/administrator/roleaudit/roleaudit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      name: '一般',
      key: 101
    },
    {
      name: '司机',
      key: 201
    },
    {
      name: '探访员',
      key: 202
    }],
    roleId : []
  },

  toAuditDetail:function(e){
    console.log(e)
    app.router.navigateTo({
      url: './roleauditdetail/roleauditdetail?index=' + e.currentTarget.dataset.content + '&roleId=' + this.data.roleId[e.currentTarget.dataset.content]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'userManagement/userRolesAuditList',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId
      },
      success: function (res) {
        console.log(res.data.waitReviewUser)
        //进行处理
        var waitReviewUser = res.data.waitReviewUser
        var waitReviewUserRoleList = new Array()
        for (var i = 0; i < waitReviewUser.length; i++){
          waitReviewUserRoleList[i] = waitReviewUser[i].waitReviewRoles
          that.data.roleId[i] = waitReviewUser[i].roleId
        }
        //console.log(waitReviewUserRoleList)
        that.setData({
          waitReviewUser: res.data.waitReviewUser,
          waitReviewUserRoleList: waitReviewUserRoleList
        });
        wx.setStorageSync("waitReviewUser", res.data.waitReviewUser)
      },
      fail: function () {
        console.log('系统错误')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})