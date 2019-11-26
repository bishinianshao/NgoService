// pages/administrator/useraudit/useraudit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roleId : 0,
  },

  onClick(e){
    console.log(e.detail.index)
    this.data.roleId = e.detail.index
    var that = this
    wx.request({
      url: 'http://222.195.149.104:8080/userManagement/userList',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        roleId: e.detail.index+1
      },
      success: function (res) {
        console.log(res.data)
        //进行处理
        that.setData({
          userInfos: res.data.userInfos
        });
        wx.setStorageSync("userAuditList", res.data.userInfos)
      },
      fail: function () {
        console.log('系统错误')
      }
    })
  },

  toAuditDetail(e){
    console.log(e)
    app.router.navigateTo({
      url: './userauditdetail/userauditdetail?index=' + e.currentTarget.dataset.content + '&roleId=' + this.data.roleId,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://222.195.149.104:8080/userManagement/userList',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        roleId: 1
      },
      success: function (res) {
        console.log(res.data)
        //进行处理
        that.setData({
          userInfos: res.data.userInfos
        });
        wx.setStorageSync("userAuditList", res.data.userInfos)
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