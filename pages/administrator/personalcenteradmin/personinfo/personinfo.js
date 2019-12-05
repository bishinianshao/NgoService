
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: null,
    gender: ['女', '男'],
    info: [],
    isDriver: true,
    isVistors: true,
    activeNames: ['1', '2', '3'],
    checked1: true,
    checked2: true,
    roleArr: []
  },

  onChangeSwitch1({ detail }) {
    var that = this
    // 需要手动对 checked 状态进行更新
    this.setData({ checked1: detail });
    console.log(that.data.roleArr)
    if (detail == false) {
      if (that.data.roleArr.length == 2) {
        that.data.roleArr = [1]
      }
      else {
        that.data.roleArr = [1, 3]
      }
    } else {
      if (that.data.roleArr.length == 2 && that.data.info.carNumber != '') {
        that.data.roleArr = [1, 2, 3]
      }
      else if (that.data.roleArr.length == 1 && that.data.info.carNumber != '') {
        that.data.roleArr = [1, 2]
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'user/personalInfo',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
      },
      success: function (res) {
        console.log(res)
        //进行处理
        var roleId = res.data.userInfo.role
        switch (roleId) {
          case 1: that.setData({
            isDriver: false,
            isVistors: false,
          })
            break;
          case 2: that.setData({
            isDriver: false,
            isVistors: true,
          })
            break;
          case 3: that.setData({
            isDriver: true,
            isVistors: false,
          })
            break;
          case 4: that.setData({
            isDriver: true,
            isVistors: true,
          })
            break;
          case 5: that.setData({
            isDriver: true,
            isVistors: true,
          })
            break;
          default: break
        }
        that.setData({
          userInfo: res.data.userInfo,
          gender: that.data.gender[res.data.userInfo.gender]
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