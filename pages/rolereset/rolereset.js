// pages/rolereset/rolereset.js
import Toast from '../../Component/vant/toast/toast';
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDriver: false,
    isVisitor : false,
    userRoles : [],
    driverIndex : null,
    visitorIndex : null
  },


  onDriverSwitchChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    var that = this
    this.setData({ isDriver: detail })
    /*if (detail == true){
      if (that.data.driverIndex == -1) {
        that.data.userRoles.push({
          applyTimeStr: new Date(),
          roleId: 201,
          state: 0,
          userId: "",
          userRoleId: that.data.userRoles[0].userId,
        })
      } else {
        that.data.userRoles[that.data.driverIndex].state = 1
      }
    } else 
    {
      if (that.data.driverIndex == -1){
        that.data.userRoles.pop()
      }
      else  that.data.userRoles[that.data.driverIndex].state = 3
    }*/
    if (detail == true){
      if (that.data.driverIndex == -1) {
        that.data.userRoles.push({
          applyTimeStr: new Date(),
          roleId: 201,
          state: 1,
          userId: "",
          userRoleId: that.data.userRoles[0].userId,
        })
      } else {
        that.data.userRoles[that.data.driverIndex].state = 1
      }
    } else 
    {
      if (that.data.driverIndex == -1){
        that.data.userRoles.pop()
      }
      else  that.data.userRoles[that.data.driverIndex].state = 0
    }
  },

  onVisitorSwitchChange({ detail }) {

    // 需要手动对 checked 状态进行更新
    var that = this
    this.setData({ isVisitor: detail });
    /*if (detail == true) {
      if (that.data.visitorIndex == -1) {
        that.data.userRoles.push({
          applyTimeStr: new Date(),
          roleId: 202,
          state: 0,
          userId: "",
          userRoleId: that.data.userRoles[0].userId,
        })
      } else {
        that.data.userRoles[that.data.visitorIndex].state = 1
      }
    } else {
      if (that.data.driverIndex == -1) {
        that.data.userRoles.pop()
      }
      else{
        that.data.userRoles[that.data.visitorIndex].state = 3
      }  
    }*/
    if (detail == true) {
      if (that.data.visitorIndex == -1) {
        that.data.userRoles.push({
          applyTimeStr: new Date(),
          roleId: 202,
          state: 1,
          userId: "",
          userRoleId: that.data.userRoles[0].userId,
        })
      } else {
        that.data.userRoles[that.data.visitorIndex].state = 1
      }
    } else {
      if (that.data.driverIndex == -1) {
        that.data.userRoles.pop()
      }
      else{
        that.data.userRoles[that.data.visitorIndex].state = 0
      }  
    }
  },

  sumbit(){
    console.log(this.data.userRoles)
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'user/modifyRoleState',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        userRoles :that.data.userRoles
      },
      success: function (res) {
        //console.log(res.data)
        //console.log(res.data.roleId)
        wx.setStorageSync("rolesId", res.data.roleId)
        /*if (res.data.roleId.includes(201) || res.data.roleId.includes(202)){
          wx.setStorageSync("rangeRoles", wx.getStorageSync("rangeRoles").push(2))
        }*/
      },
      fail: function () {
        console.log('系统错误')
      }
    })
    Toast('提交成功')
    wx.redirectTo({
      url: '../personalcenter/personalcenter',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.ipAdress + 'user/personalRoles',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
      },
      success: function (res) {
        console.log(res.data.userRoles)
        that.data.userRoles = res.data.userRoles
        var userRoles = new Array()
        userRoles = res.data.userRoles
        var driverIndex =  userRoles.findIndex(item => item.roleId == 201)
        var visitorIndex = userRoles.findIndex(item => item.roleId == 202)
        that.data.driverIndex = driverIndex
        that.data.visitorIndex = visitorIndex
        if (driverIndex != -1){
          if (userRoles[driverIndex].state == 0){
            that.setData({
              driverDisabled : true
            })
          } else if (userRoles[driverIndex].state == 1){
            that.setData({
              driverDisabled: false,
              isDriver : true
            })

          } else if (userRoles[driverIndex].state == 3){
            that.setData({
              driverDisabled: false,
              isDriver: false
            })
          }
          that.setData({
            driverState: userRoles[driverIndex].state
          })
        }

        if (visitorIndex != -1){
          if (userRoles[visitorIndex].state == 0) {
            that.setData({
              visitorDisabled: true
            })
          } else if (userRoles[visitorIndex].state == 1) {
            that.setData({
              visitorDisabled: false,
              isVisitor: true
            })

          } else if (userRoles[visitorIndex].state == 3) {
            that.setData({
              visitorDisabled: false,
              isVisitor: false
            })
          }
          that.setData({
            visitorState: userRoles[visitorIndex].state
          })
        }
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