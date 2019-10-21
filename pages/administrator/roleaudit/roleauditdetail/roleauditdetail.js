// pages/administrator/roleaudit/roleauditdetail/roleauditdetail.js
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
    isDriver: true,
    isVistors: false,
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