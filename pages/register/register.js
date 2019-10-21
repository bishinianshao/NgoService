// pages/register/register.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleGetUserInfo() {
    wx.navigateTo({
      url: '../homepages/homepages',
    })
  },

  getUserInfo: function (e) {
    var _this = this
    // 登录
    wx.login({
      success: function (r) {
        var code = r.code; //登录凭证
        console.log(r)
        if (code) {
          //2、调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
              wx.request({
                url: 'http://222.195.149.104:8080/ngo_servlet/LoginSe',
                method: 'post',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                  encryptedData: res.encryptedData,
                  iv: res.iv,
                  code: code
                },
                success: function (data) {
                  console.log(data)
                  console.log("data====" + data.data)
                  //进行处理
                },
                fail: function () {
                  console.log('系统错误')
                  app.globalData.hasUserInfo = false
                }
              })
            },
            fail: function () {
              console.log('获取用户信息失败')
            }
          })
        } else {
          console.log('获取用户登录态失败！' + r.errMsg)
        }
      },
      fail: function () {
        console.log("登陆失败")
      }
    })
  },

  handleRegister(data){
    if (data.detail.rawData) {
      this.getUserInfo()
    }
    wx.navigateTo({
      url: './registerdetail/registerdetail',
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