// pages/administrator/registrationaudit/registrationauditdetail/registrationauditdetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info : [],
    isDriver: true,
    isVistors: true,
    activeNames: ['1', '2', '3'],
    checked1: true,
    checked2: true,
    roleArr : []
  },

  onChangeSwitch1({ detail }) {
    var that = this
    // 需要手动对 checked 状态进行更新
    this.setData({ checked1: detail });
    console.log(that.data.roleArr)
    if (detail == false){
      if (that.data.roleArr.length == 2){
        that.data.roleArr = [1]
      }
      else {
        that.data.roleArr = [1,3]
      }
    } else {
      if (that.data.roleArr.length == 2 && that.data.info.carNumber != '') {
        that.data.roleArr = [1,2,3]
      }
      else if (that.data.roleArr.length == 1 && that.data.info.carNumber != '') {
        that.data.roleArr = [1,2]
      }
    }
  },

  onChangeSwitch2({ detail }) {
    var that = this
    console.log(that.data.roleArr)
    // 需要手动对 checked 状态进行更新
    this.setData({ checked2: detail });
    if (detail == false) {
      if (that.data.roleArr.length == 2) {
        that.data.roleArr = [1]
      }
      else {
        that.data.roleArr = [1, 2]
      }
    } else {
      if (that.data.roleArr.length == 2 && that.data.info.visitingExperience != undefined) {
        that.data.roleArr = [1, 2, 3]
      }
      else if (that.data.roleArr.length == 1 && that.data.info.visitingExperience != undefined) {
        that.data.roleArr = [1, 3]
      }
    }
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },

  pass: function () {
    var that = this 
    this.data.info.roles = this.data.roleArr
    console.log(app.globalData.sessionId)
    wx.request({
      url: 'http://222.195.149.104:8080/registrationAudit/agree',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        userId: this.data.info.userId,
        roles: this.data.info.roles
      },
      success: function (res) {
        console.log(res)
        //进行处理
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    wx.redirectTo({
      url: '../../registrationaudit/registrationaudit',
    })
  },

  reject: function () {
    var that = this
    this.data.info.roles = this.data.roleArr
    console.log(this.data.info)
    wx.request({
      url: 'http://222.195.149.104:8080/registrationAudit/reject',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        userId: this.data.info.userId,
      },
      success: function (res) {
        console.log(res)
        //进行处理
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    wx.redirectTo({
      url: '../../registrationaudit/registrationaudit',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log(wx.getStorageSync("registrationList"))
    var registrationList = new Array()
    registrationList = wx.getStorageSync("registrationList")
    this.data.info = registrationList[options.index]
    console.log(this.data.info.roles)
    this.data.roleArr = this.data.info.roles

    if (this.data.roleArr.length == 3){
      this.setData({
        isDriver: true,
        isVistors: true,
      })
    } else if (this.data.roleArr.length == 2 && this.data.roleArr[1] == 2){
      this.setData({
        isDriver: true,
        isVistors: false,
      })
    } else if (this.data.roleArr.length == 2 && this.data.roleArr[1] == 3){
      this.setData({
        isDriver: false,
        isVistors: true,
      })
    } else {
      this.setData({
        isDriver: false,
        isVistors: false,
      })
    }
    this.setData({
      userInfo: registrationList[options.index]
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