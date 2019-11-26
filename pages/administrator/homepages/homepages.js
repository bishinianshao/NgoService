// pages/administrator/homepages/homepages.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
          url: '../personalcenteradmin/personalcenteradmin',
        })
      }
    } else {
      Toast('请先完成登录');
    }
  },
  //用户功能
  toUser() {
    app.router.navigateTo({
      url: '../../homepages/homepages?role=5',
    })
  },
  //角色审核
  toRoleAudit : function(){
    app.router.navigateTo({
      url: '../roleaudit/roleaudit',
    })
  },
  //注册审核
  toRegistrationAudit : function(){
    app.router.navigateTo({
      url: '../registrationaudit/registrationaudit',
    })
  },
  //需求审核
  toRequireAudit : function(){
    app.router.navigateTo({
      url: '../requireaudit/requireaudit',
    })
  },
  //探访审核
  toApplyAudit : function(){
    app.router.navigateTo({
      url: '../applyaudit/applyaudit',
    })
  },
  //后期跟进审核
  navFollowAudit : function(){
    app.router.navigateTo({
      url: '../followaudit/followaudit',
    })
  },
  //人员管理
  navUserAudit(){
    app.router.navigateTo({
      url: '../useraudit/useraudit',
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