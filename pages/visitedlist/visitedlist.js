var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitDemandId : null,
    visitDemandList : null
  },
  //详情
  signup(e) {
    console.log(e)
    var visitDemandList = this.data.visitDemandList
    var visitDemandId = visitDemandList[e.currentTarget.dataset.content].visitingDemandId
    app.router.navigateTo({
      url: './listdetail/listdetail?visitDemandId=' + visitDemandId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var states = new Array()
    states.push(Number.parseInt(options.states))
    wx.request({
      url: app.globalData.ipAdress + 'user/viewVisitDemand',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        states: states
      },
      success: function (res) {
        console.log(res.data)
        //进行处理
        //wx.setStorageSync("visitList", res.data.visitDemandList)
        that.setData({
          visitList: res.data.visitDemandList
        })
        that.data.visitDemandList = res.data.visitDemandList
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