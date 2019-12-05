// pages/administrator/useraudit/useraudit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    roleIdList : [],
    roleId : 1,
    list: [{
      name : '一般',
      key : 101
    },
      {
      name: '司机',
      key: 201
    },
    {
      name: '探访员',
      key: 202
    }],
  },

  onClick(e){
    //console.log(e)
    var that = this
    switch (e.detail.title) {
      case '一般': 
        that.data.roleIdList = [101] 
        that.data.roleId = 1
        break;
      case '司机': that.data.roleIdList = [101,201]
        that.data.roleId = 2 
        break;
      case '探访员': that.data.roleIdList = [101,202]
        that.data.roleId = 3 
        break;
      case '双重': that.data.roleIdList = [101,201,202] 
        that.data.roleId = 4
        break;
      default: break
    }
    wx.request({
      url: app.globalData.ipAdress +'userManagement/userList',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        roleIdList: that.data.roleIdList
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
    this.data.roleIdList = [101]
    wx.request({
      url: app.globalData.ipAdress +'userManagement/userList',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        roleIdList: [101]
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