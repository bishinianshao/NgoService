//pages/administrator/roleaudit/roleauditdetail/roleauditdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      name: "张三",
      gender: "男",
      birthdate: "1988-02-05",
      address: "山东省青岛市崂山区",
      phone: "2010-10-10",
      believeyear: "2011",
      freetime: "周六",
      spousebelief: "无",
      hall:"崂山会堂"
    },
    driverInfor:{
      numberplates : "鲁B21K0214",
      passengers : "5",
      familiararea : "市南区"
    },
    content : '探访经历',
    isDriver: true,
    isVistors: true,
    activeNames: ['1', '2', '3'],
    checked1: true,
    checked2: true
  },

  onChangeSwitch1({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked1: detail });
  },

  onChangeSwitch2({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked2: detail });
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },

  pass : function(){
    console.log(1111111)
    wx.redirectTo({
      url: '../../roleaudit/roleaudit',
    })
  },

  reject :function (){
    console.log(2222222)
    wx.redirectTo({
      url: '../../roleaudit/roleaudit',
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