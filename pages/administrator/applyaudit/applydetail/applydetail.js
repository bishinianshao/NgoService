// pages/administrator/applyaudit/applydetail/applydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      name: "张三",
      reading: "读经内容",
      pray: "祷告内容",
      party: "聚会内容",
      visittime: "2010-10-10",
      visitreason: "探访原因",
      careneed: "关怀需要",
      remark: "备注"
    },
    drivers: [
      { name: "张飞" },
      { name: "刘备" }
    ],
    vistors: [
      { name: "张飞" },
      { name: "王五" }
    ],
    list: ['司机', '探访员'],
    result: [],
  },

  handleDelete : function(){
    console.log(11111111111)
  },

  handlePriDuty : function(){
    console.log(222222222)
  },

  pass: function () {
    console.log(1111111)
    wx.redirectTo({
      url: '../../applyaudit/applyaudit',
    })
  },

  reject: function () {
    console.log(2222222)
    wx.redirectTo({
      url: '../../applyaudit/applyaudit',
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