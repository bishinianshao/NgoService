// pages/administrator/followaudit/followdetail/followdetail.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    visitDemandId: null
  },

  pass: function () {
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'visitDemandFollow/agreeFollow',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId: that.data.visitDemandId
      },
      success: function (res) {
        console.log(res)
        //进行处理
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    wx.redirectTo({
      url: '../../followaudit/followaudit',
    })
  },

  reject: function () {
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'visitDemandFollow/rejectFollow',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId: that.data.visitDemandId
      },
      success: function (res) {
        console.log(res)
        //进行处理
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    wx.redirectTo({
      url: '../../followaudit/followaudit',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.data.visitDemandId = options.visitDemandId
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'visitDemandFollow/demandDetail',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId: options.visitDemandId
      },
      success: function (res) {
        //进行处理
        console.log(res.data)
        that.setData({
          visitDemandDetails: res.data.demandDetail
        });
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