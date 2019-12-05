//pages/administrator/roleaudit/roleauditdetail/roleauditdetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDriver: false,
    isVistors: false,
    driverWaitting : false,
    vistorsWaitting: false,
    driverAble : false,
    vistorsAble : false,
    activeNames: ['1', '2', '3'],
    gender: ['女', '男'],
    throughRoleIds : [],
    rejectRoleIds : [],
    userId : null,
    checked1: true,
    checked2: true
  },
  //司机状态改变
  onChangeSwitch1({ detail }) {
    var that = this
    // 需要手动对 checked 状态进行更新
    this.setData({ checked1: detail });
    if (detail == true){
      that.data.throughRoleIds.push(201)
      var index = that.data.rejectRoleIds.indexOf(201)
      if (index > -1) {
        that.data.rejectRoleIds.splice(index, 1)
      }
      //console.log('throughRoleIds' + that.data.throughRoleIds + '---------------' + 'rejectRoleIds' + that.data.rejectRoleIds)
    }else {
      var index = that.data.throughRoleIds.indexOf(201)
      if (index > -1) {
        that.data.throughRoleIds.splice(index, 1)
      }
      that.data.rejectRoleIds.push(201)
      //console.log('throughRoleIds' + that.data.throughRoleIds + '---------------' + 'rejectRoleIds' + that.data.rejectRoleIds)
    }
  },
  //探访员状态改变
  onChangeSwitch2({ detail }) {
    var that = this
    this.setData({ checked2: detail });
    // 需要手动对 checked 状态进行更新
    if (detail == true) {
      var index = that.data.rejectRoleIds.indexOf(202)
      if (index > -1) {
        that.data.rejectRoleIds.splice(index, 1)
      }
      that.data.throughRoleIds.push(202)
      //console.log('throughRoleIds' + that.data.throughRoleIds + '---------------' + 'rejectRoleIds' + that.data.rejectRoleIds)
    } else {
      that.data.rejectRoleIds.push(202)
      var index = that.data.throughRoleIds.indexOf(202);
      if (index > -1) {
        that.data.throughRoleIds.splice(index, 1);
      }
      //console.log('throughRoleIds' + that.data.throughRoleIds + '---------------' + 'rejectRoleIds' + that.data.rejectRoleIds)
    }
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },

  pass : function(){
    var that = this
    console.log('throughRoleIds' + this.data.throughRoleIds + '---------------' + 'rejectRoleIds' + this.data.rejectRoleIds)
    wx.request({
      url: app.globalData.ipAdress + 'userManagement/userRolesAuditList',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        userId : that.data.userId,
        throughRoleIds: that.data.throughRoleIds,
        rejectRoleIds: that.data.rejectRoleIds
      },
      success: function (res) {
        console.log(res.data)
        //进行处理
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    /*wx.redirectTo({
      url: '../../roleaudit/roleaudit',
    })*/
  },

  reject :function (){
    var throughRoleIds = this.data.rejectRoleIds
    var rejectRoleIds = this.data.throughRoleIds
    console.log('throughRoleIds' + throughRoleIds + '---------------' + 'rejectRoleIds' + rejectRoleIds)
    /*wx.redirectTo({
      url: '../../roleaudit/roleaudit',
    })*/
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var userInfos = new Array()
    userInfos = wx.getStorageSync("waitReviewUser") 
    this.data.userInfo = userInfos[options.index]
    console.log(this.data.userInfo)
    this.data.userId = this.data.userInfo.userId
    var roleAudited = this.data.userInfo.roleId
    var roleWaitting = this.data.userInfo.waitReviewRoles
    this.data.driverWaitting = roleWaitting.some(function (item) {
      if (item.roleId == 201) {
      that.data.throughRoleIds.push(201)
      return true;
    }})
    this.data.vistorsWaitting = roleWaitting.some(function (item) {
      if (item.roleId == 202) {
        that.data.throughRoleIds.push(202)
        return true
    }})
    if (roleAudited.includes(201) || this.data.driverWaitting == true){
      that.setData({
        isDriver: true,
      })
      if (roleAudited.includes(201)) {
        that.setData({
          driverAble: true,
        })
      }
    }
    if (roleAudited.includes(202) || this.data.vistorsWaitting == true) {
      that.setData({
        isVistors: true,
      })
      if (roleAudited.includes(202)){
        that.setData({
          vistorsAble: true,
        })
      }
    }
    that.setData({
      userInfo: that.data.userInfo,
      gender: that.data.gender[that.data.userInfo.gender]
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