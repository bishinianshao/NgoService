// pages/administrator/homepages/homepages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  toRoleAudit : function(){
    wx.navigateTo({
      url: '../roleaudit/roleaudit',
    })
  },

  toRegistrationAudit : function(){
    wx.navigateTo({
      url: '../registrationaudit/registrationaudit',
    })
  },
  toRequireAudit : function(){
    wx.navigateTo({
      url: '../requireaudit/requireaudit',
    })
  },
  toApplyAudit : function(){
    wx.navigateTo({
      url: '../applyaudit/applyaudit',
    })
  },

  navFollowAudit : function(){
    wx.navigateTo({
      url: '../followaudit/followaudit',
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