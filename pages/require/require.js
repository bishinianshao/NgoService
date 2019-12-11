// pages/require/require.js
import Toast from '../../Component/vant/toast/toast';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requireInfo:{
      //姓名
      name: null,
      //探访原因
      visitingReason : null,
      //关怀需求
      caringNeeds: null,
      //下发需求备注
      deliveryDemandRemarks : null,
      //探访时间
      visitingTime: null,
      //读经内容
      faithStatue_Read: null,
      //祷告内容
      faithStatue_Prayer: null,
      //聚会
      faithStatue_Meet: null
    },
    visitDate : null,
    remarks : null
  },

  //探访需求信息
  onChange(e){
    //console.log(e)
    this.data.requireInfo[e.currentTarget.dataset.model] = e.detail
  },

  //探访日期绑定值
  bindDateChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.data.visitDate = e.detail.value
  },

  //备注
  contentChange(e) {
    //console.log(e.detail)
    this.setData({
      content: e.detail.value
    })
    this.data.remarks = e.detail.value
  },

  sumbit(){
    var that = this
    this.data.requireInfo.visitingTime = this.data.visitDate
    this.data.requireInfo.deliveryDemandRemarks = this.data.remarks
    console.log(this.data.requireInfo)
    Toast('需求发布成功')
    wx.request({
      url: app.globalData.ipAdress + 'user/submitVisitDemand',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitDemand: that.data.requireInfo
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
      url: '../homepages/homepages?role=' + wx.getStorageSync("rangeRoles"),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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