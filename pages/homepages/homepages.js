// pages/homepages/homepages.js
var app = getApp();
import Toast from '../../Component/vant/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    role : 0
  },

  onChange(event) {
    //console.log(event.detail);
    //if (app.globalData.hasUserInfo)
     if(true){
      if (event.detail == 0) {
        wx.redirectTo({
          url: '../homepages/homepages',
        })
      }  else if (event.detail == 1) {
        wx.redirectTo({
          url: '',
        })
      } else if (event.detail == 2) {
        wx.redirectTo({
          url: '../personalcenter/personalcenter',
        })
      }
    } else {
      Toast('请先完成登录');
    }

  },
  postRequire(){
    app.router.navigateTo({
      url: '../require/require',
    })
  },

  navapply(){
    app.router.navigateTo({
      url: '../applyvistor/applyvistor',
    })
  },

  navtodo() {
    app.router.navigateTo({
      url: '../todolist/todolist',
    })
  },
  navcompleted(){
    app.router.navigateTo({
      url: '../completedlist/completedlist',
    })
  },
  //待审核订单
  navWaitingList (){
    app.router.navigateTo({
      url: '../visitedlist/visitedlist?states=0',
    })
  },
  //待完成订单
  navToCompleteList(){
    app.router.navigateTo({
      url: '../visitedlist/visitedlist?states=3',
    })
  },
  toAdministraror(){
    app.router.navigateTo({
      url: '../administrator/homepages/homepages?roles='+this.data.role,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //console.log(options.role)
    wx.setStorageSync("rangeRoles", options.role)  //进行用户是管理员 志愿者 普通人员的判断
    this.data.role = options.role
    this.setData({
      role: that.data.role,
      isVolunteer: that.data.role.includes(2),
      isAdministrator: that.data.role.includes(3)
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