// pages/administrator/requireaudit/requireaudit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitDemandId: null,
    visitDemandList: null
  },

  toAuditDetail: function (e) {
    console.log(e)
    var visitDemandList = this.data.visitDemandList
    var visitDemandId = visitDemandList[e.currentTarget.dataset.content].visitingDemandId
    app.router.navigateTo({
      url: './requiredetail/requiredetail?visitDemandId=' + visitDemandId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'demandManagement/visitDemandAuditList',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId
      },
      success: function (res) {
        console.log(res.data)
        //进行处理
        //wx.setStorageSync("requireAduit", res.data.waitReviewVisitDemand)
        that.setData({
          auditlist: res.data.waitReviewVisitDemand
        });
        that.data.visitDemandList = res.data.waitReviewVisitDemand
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