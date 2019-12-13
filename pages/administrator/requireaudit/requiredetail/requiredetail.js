// pages/administrator/requireaudit/requiredetail/requiredetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      visitingDemandId : null
    },
  },

  pass: function () {
    console.log(1111111)
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'demandManagement/agree',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId: that.data.visitingDemandId
      },
      success: function (res) {
        console.log(res.data)
        //进行处理
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    wx.redirectTo({
      url: '../../requireaudit/requireaudit',
    })
  },

  reject: function () {
    console.log(2222222)
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'demandManagement/reject',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId: that.data.visitingDemandId
      },
      success: function (res) {
        console.log(res.data)
        //进行处理
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    wx.redirectTo({
      url: '../../requireaudit/requireaudit',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'demandManagement/visitDemandDetails',
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
          userInfo: res.data.visitDemandDetails
        });
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    this.data.visitingDemandId = options.visitDemandId
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