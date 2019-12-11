// pages/completedlist/completedlist.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todolist: [
      {
        name: "王红",
        date: '2018-10-07'
      },
      {
        name: "诸葛亮",
        date: '2018-10-08'
      },
    ]

  },
  //详情
  signup() {
    app.router.navigateTo({
      url: './completdetail/completdetail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.ipAdress + 'user/viewVisitDemand',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        states : [0,1,2]
      },
      success: function (res) {
        console.log(res.data)
        //进行处理
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