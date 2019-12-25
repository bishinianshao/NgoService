import Toast from '../../../Component/vant/toast/toast';
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    visitDemandDetails : null,
    visitedPersonId : null
  },

  //探访需求信息
  onChange(e) {
    //this.data.requireInfo[e.target.id - 1] = e.detail
    this.data.visitDemandDetails[e.currentTarget.dataset.model] = e.detail
    console.log(this.data.visitDemandDetails)
  },

  //探访日期绑定值
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    this.data.visitDemandDetails.visitingTime = e.detail.value
  },

  //备注
  contentChange(e) {
    this.setData({
      content: e.detail.value
    })
    this.data.visitDemandDetails.followMatter_Matter = e.detail.value
  },

  sumbit() {
    var that =this
    console.log(this.data.visitDemandDetails)
    wx.request({
      url: app.globalData.ipAdress + '/volunteer/visitFollow',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitedPersonId: that.data.visitedPersonId,
        visitDemand: that.data.visitDemandDetails
      },
      success: function (res) {
        console.log(res.data)
        Toast('后期跟进已经提交，请等待审核')
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    wx.redirectTo({
      url: '../../homepages/homepages?role=' + wx.getStorageSync("rangeRoles"),
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this
    this.data.visitDemandId = options.visitDemandId
    wx.request({
      url: app.globalData.ipAdress + 'volunteer/visitDemandDetails',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId: options.visitDemandId
      },
      success: function (res) {
        console.log(res.data)
        that.data.visitDemandDetails = res.data.visitDemandDetails
        that.data.visitedPersonId = res.data.visitDemandDetails.user.userId
        that.data.visitDemandDetails.visitingTime = res.data.visitDemandDetails.visitingTimeStr
        //进行处理
        that.setData({
          visitDemandDetails: res.data.visitDemandDetails,
          date: res.data.visitDemandDetails.visitingTimeStr
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