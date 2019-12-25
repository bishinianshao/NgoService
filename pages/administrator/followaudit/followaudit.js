// pages/administrator/followaudit/followaudit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitingDemandId : null,
    demandAuditList : null
  },

  toAuditDetail: function (e) {
    var visitDemandList = this.data.demandAuditList
    var visitDemandId = visitDemandList[e.currentTarget.dataset.content].visitingDemandId
    app.router.navigateTo({
      url: './followdetail/followdetail?visitDemandId=' + visitDemandId
    })
  },
  /**
   * 生命周期函数--监听页面加载00 
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'visitDemandFollow/demandAuditList',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId
      },
      success: function (res) {
        console.log(res.data.demandAuditList)
        //进行处理
        that.setData({
          auditlist: res.data.demandAuditList
        });
        that.data.demandAuditList = res.data.demandAuditList
        that.data.visitingDemandId = res.data.demandAuditList.visitingDemandId
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