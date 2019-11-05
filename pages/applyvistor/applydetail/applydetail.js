
import Toast from '../../../Component/vant/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      name: "张三",
      reading: "读经内容",
      pray: "祷告内容",
      party: "聚会内容",
      visittime: "2010-10-10",
      visitreason: "探访原因",
      careneed: "关怀需要",
      remark: "备注"
    },
    drivers: [
      { name: "张飞" },
      { name: "刘备" }
    ],
    vistors: [
      { name: "张飞" },
      { name: "王五" }
    ],
    list: ['司机', '探访员'],
    result: [],
  },

  onNextChange(e) {
    console.log(e.detail)
    this.setData({
      result: e.detail,
    });
  },

  sumbit() {
    console.log(this.data.result)
    Toast('报名成功')
    if (this.data.result.length == 0) {
      Toast('请至少选择一个角色')
    }
    else {
      wx.redirectTo({
        url: '../../homepages/homepages',
      })
    }
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