// pages/administrator/applyaudit/applydetail/applydetail.js
var app = getApp()
import Dialog from '../../../../Component/vant/dialog/index';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: ['司机', '探访员'],
    visitingDemandId: null,
    visitDemandDetails : null,
    result: [],
    activeNames: ['1'],
    userId : null,
    roleId : null
  },
  
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  //异步关闭
  onClose(event) {
    var that = this
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
        wx.showModal({
          title: '温馨提示',
          content: '您确认要指定此人为主要负责人吗？',
          success(res) {
            if (res.confirm) {
              var volunteerList = that.data.visitDemandDetails.drivers.concat(that.data.visitDemandDetails.visitors)
              var volunteerList = volunteerList.findIndex(item => item.userId == that.data.userId)
              that.setData({
                principalId: that.data.userId
              })
              instance.close();
            } else if (res.cancel) {
              instance.close();
              console.log('用户点击取消')
            }
          }
        })
        break;
      case 'cell':
        instance.close();
        break;
      case 'right':
        wx.showModal({
          title: '温馨提示',
          content: '您确认要删除吗？',
          success(res) {
            if (res.confirm) {
              if (that.data.roleId == 201){
                var driverList = that.data.visitDemandDetails.drivers
                var driverIndex = driverList.findIndex(item => item.userId == that.data.userId)
                driverList.splice(driverIndex,1)
                that.setData({
                  driverList: driverList
                })
              } else if (that.data.roleId == 202){
                var visitorList = that.data.visitDemandDetails.visitors
                var visitorIndex = visitorList.findIndex(item => item.userId == that.data.userId)
                visitorList.splice(visitorIndex, 1)
                that.setData({
                  visitorList: visitorList
                })
              }
              instance.close();
            } else if (res.cancel) {
              instance.close();
              console.log('用户点击取消')
            }
          }
        })
        break;
    }
  },

  handleUserId : function(e){
    this.data.userId = e.currentTarget.dataset.content
    this.data.roleId = e.currentTarget.id
  },

  pass: function () {
    console.log(1111111)
    /*wx.redirectTo({
      url: '../../applyaudit/applyaudit',
    })*/
  },

  reject: function () {
    console.log(2222222)
    /*wx.redirectTo({
      url: '../../applyaudit/applyaudit',
    })*/
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //console.log(options)
    wx.request({
      url: app.globalData.ipAdress + 'visitAudit/visitAuditDetails',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId: options.visitDemandId
      },
      success: function (res) {
        //进行处理
        console.log(res.data)
        that.setData({
          visitDemandDetails: res.data.visitDemandDetails,
          driverList : res.data.visitDemandDetails.drivers,
          visitorList: res.data.visitDemandDetails.visitors
        })
        that.data.visitDemandDetails = res.data.visitDemandDetails
        that.data.visitingDemandId = options.visitingDemandId
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