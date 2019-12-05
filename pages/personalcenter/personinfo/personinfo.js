// pages/personalcenter/personinfo/personinfo.js
var app = getApp()
import Toast from '../../../Component/vant/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: ['女', '男'],
    activeNames: ['1', '2', '3'],
    userInforArr: [],
    hallData: [],
    hallIndex: null,
    driverInforArr: [],
    userInfo: {
      //姓名
      name: "",
      //性别
      gender: "",
      //出生日期
      birthday: "",
      //家庭住址
      address: "",
      //联系方式
      phone: "",
      //信主年份
      believeTime: "",
      //空闲时间
      freeTime: "",
      //配偶信仰
      spouseBelief: "",
      //所属会堂
      hallId: "",
      //车辆信息
      carInfo: "",
      //车牌号
      carNumber: "",
      //熟悉区域
      familiarArea: "",
      //探访经历
      visitingExperience: ""
    },
  },

  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },

  //性别选择
  bindGenderChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //出生日期绑定值
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.data.birthDate = e.detail.value
  },
  //普通用户注册信息
  onChange(e) {
    console.log(e)
    this.data.userInfo[e.currentTarget.dataset.model] = e.detail
    //this.data.userInforArr[e.target.id - 1] = e.detail
    //console.log( this.data.userInfo)
  },

  bindHallChange(e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      hallIndex: e.detail.value
    })
    this.data.hallId = e.detail.value
  },

  contentChange(e) {
    //console.log(e.detail)
    this.setData({
      content: e.detail.value
    })
    this.data.vistorExp = e.detail.value
  },

  sumbit() {
    var that = this
    //console.log(this.data.userInfo.address)
    //this.data.userInforArr[0]
    /*this.data.userInfo.name = this.data.userInforArr[0]
    this.data.userInfo.address = this.data.userInforArr[1]
    this.data.userInfo.phone = this.data.userInforArr[2]
    this.data.userInfo.believeTime = this.data.userInforArr[3]
    this.data.userInfo.freeTime = this.data.userInforArr[4]
    this.data.userInfo.spouseBelief = this.data.userInforArr[5]


    this.data.userInfo.carNumber = this.data.driverInforArr[0]
    this.data.userInfo.carInfo = this.data.driverInforArr[1]
    this.data.userInfo.familiarArea = this.data.driverInforArr[2]

    */
    this.data.userInfo.gender = this.data.index
    this.data.userInfo.birthdayStr = this.data.birthDate
    this.data.userInfo.hallId = this.data.hallData[that.data.hallIndex].hallId
    this.data.userInfo.visitingExperience = this.data.vistorExp
    console.log(this.data.userInfo)

    wx.request({
      url: app.globalData.ipAdress + 'user/modifyUserInfo',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        userInfo: that.data.userInfo,
      },
      success: function (res) {
        //进行处理
        console.log(res)
        Toast('修改成功')
      },
      fail: function () {
        console.log('系统错误')
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    wx.request({
      url: app.globalData.ipAdress + 'findAllHallInfo',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.halls)
        that.data.hallData = res.data.halls
        wx.setStorageSync("hall", res.data.halls) 
        that.setData({
          hallNameData: that.data.hallData
        })
      },
      fail: function () {
        console.log('系统错误')
      }
    })

    wx.request({
      url: app.globalData.ipAdress +'user/personalInfo',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
      },
      success: function (res) {
        console.log(res.data.userInfo)
        //进行处理
        that.data.userInfo = res.data.userInfo
        that.data.hallIndex = that.data.hallData.findIndex(item => item.hallId == res.data.userInfo.hallId)
        that.data.birthDate = res.data.userInfo.birthdayStr
        that.setData({
          userInfo: res.data.userInfo,
          index: res.data.userInfo.gender,
          date: res.data.userInfo.birthdayStr,
          hallIndex: that.data.hallIndex
        })
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