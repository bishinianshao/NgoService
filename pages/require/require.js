// pages/require/require.js
import Toast from '../../Component/vant/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    requireInfo:[],
    visitDate : null,
    remarks : null
  },

  //探访需求信息
  onChange(e){
    this.data.requireInfo[e.target.id - 1] = e.detail
    console.log(this.data.requireInfo)
  },

  //探访日期绑定值
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.data.visitDate = e.detail.value
  },

  //备注
  contentChange(e) {
    console.log(e.detail)
    this.setData({
      content: e.detail.value
    })
    this.data.remarks = e.detail.value
  },

  sumbit(){
    console.log(this.data.requireInfo)
    console.log(this.data.visitDate)
    console.log(this.data.remarks)
    Toast('需求发布成功')
    wx.redirectTo({
      url: '../homepages/homepages',
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