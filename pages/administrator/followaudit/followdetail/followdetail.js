// pages/administrator/followaudit/followdetail/followdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      name: "张三",
      readingClassics: "读经内容",
      visitDate: "2020-02-05",
      pray: "祷告内容",
      party: "聚会内容",
      visitReason: "探访原因",
      care: "关怀需要",
      followReason: "后期跟进理由"
    },
  },

  pass: function () {
    console.log(1111111)
    wx.redirectTo({
      url: '../../followaudit/followaudit',
    })
  },

  reject: function () {
    console.log(2222222)
    wx.redirectTo({
      url: '../../followaudit/followaudit',
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