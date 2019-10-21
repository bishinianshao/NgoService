// pages/rolereset/rolereset.js
import Toast from '../../Component/vant/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked1: true,
    checked2 : false
  },


  onChange1({ detail }) {
    // 需要手动对 checked 状态进行更新
    console.log(detail)
    this.setData({ checked1: detail });
  },

  onChange2({ detail }) {
    // 需要手动对 checked 状态进行更新
    console.log(detail)
    this.setData({ checked2: detail });
  },

  sumbit(){
    console.log("提交成功")
    Toast('提交成功')
    wx.redirectTo({
      url: '../personalcenter/personalcenter',
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