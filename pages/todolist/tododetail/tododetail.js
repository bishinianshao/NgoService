// pages/todolist/tododetail/tododetail.js
import Toast from '../../../Component/vant/toast/toast';
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    visitDemandDetails : null,
    visitDemandId : null,
    activeNames: ['1'],
    isPrincipal : false
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  
  sumbit(){
    app.router.navigateTo({
      url: '../report/report?visitDemandId=' + this.data.visitDemandId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.data.visitDemandId = options.visitDemandId
    wx.request({
      url: app.globalData.ipAdress + 'visitAudit/visitAuditDetails',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId : options.visitDemandId
      },
      success: function (res) {
        console.log(res.data)
        that.data.visitDemandDetails = res.data.visitDemandDetails
        //进行处理
        that.setData({
          visitDemandDetails: res.data.visitDemandDetails,
          principalId: res.data.visitDemandDetails.principalId,
          isPrincipal: res.data.isPrincipal
        })
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