// pages/personalcenter/personalcenter.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
  },

  onChange(event) {
    console.log(event.detail);
    //if (app.globalData.hasUserInfo)
    if (true) {
      if (event.detail == 0) {
        wx.redirectTo({
          url: '../homepages/homepages',
        })
      } else if (event.detail == 1) {
        wx.redirectTo({
          url: '',
        })
      } else if (event.detail == 2) {
        wx.redirectTo({
          url: '../personalcenter/personalcenter',
        })
      }
    } else {
      Toast('请先完成登录');
    }
  },

  navToPersonInfo(){
    app.router.navigateTo({
      url: './personinfo/personinfo',
    })
  },

  navToRole(){
    app.router.navigateTo({
      url: '../rolereset/rolereset',
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