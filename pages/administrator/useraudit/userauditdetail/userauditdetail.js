// pages/administrator/useraudit/userauditdetail/userauditdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    gender: ['女','男'],
    isDriver: true,
    isVistors: true,
    activeNames: ['1', '2', '3'],
    roleArr: []
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(options)  
    var userInfos = new Array()
    userInfos = wx.getStorageSync("userAuditList")
    this.data.userInfo = userInfos[options.index]
    console.log(this.data.userInfo)
    switch (options.roleId) {
      case '1': this.setData({
                userInfo: this.data.userInfo,
                isDriver: false,
                isVistors: false,
                gender: that.data.gender[this.data.userInfo.gender]
              })
              break;
      case '2': this.setData({
                userInfo: this.data.userInfo,
                isDriver: true,
                isVistors: false,
                gender: that.data.gender[this.data.userInfo.gender]
              })
               break;
      case '3': this.setData({
                userInfo: this.data.userInfo,
                isDriver: false,
                isVistors: true,
                gender: that.data.gender[this.data.userInfo.gender]
              })
              break;
      case '4': this.setData({
                userInfo: this.data.userInfo,
                isDriver: true,
                isVistors: true,
                gender: that.data.gender[this.data.userInfo.gender]
              })
              break;
      default: break
    }
   
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