// pages/register/registerdetail/registerdetail.js
import Toast from '../../../Component/vant/toast/toast';
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectData: ['女', '男'],//下拉列表的数据
    index: null,//选择的下拉列表下标
    birthDate : null,
    list: [{
        name: '司机',
        key : 201
      },
      {
        name: '探访员',
        key: 202
    }],
    result: [],
    isDriver : false,
    isVistors : false,
    driverInforArr : [],
    vistorExp: null,
    hallData :[],
    hallIndex : 0,
    
    userInfo : {
      //姓名
      name : "",
      //性别
      gender : "",
      //出生日期
      birthday : "",
      //家庭住址
      address : "",
      //联系方式
      phone : "",
      //信主年份
      believeTime : "",
      //空闲时间
      freeTime : "",
      //配偶信仰
      spouseBelief : "",
      //所属会堂
      hallId : "",
      //车辆信息
      carInfo : "",
      //车牌号
      carNumber : "",
      //熟悉区域
      familiarArea : "",
      //探访经历
      visitingExperience : ""
    },
    roles :['101'],
    volunteers:[]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.ipAdress +'findAllHallInfo',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        var hallName = new Array()
        that.data.hallData = res.data.halls
        wx.setStorageSync("hall", res.data.halls)
        for (var i = 0; i < res.data.halls.length; i++){
          hallName[i] = res.data.halls[i].name
        }
        that.setData({
          hallNameData: hallName
        })
      },
      fail: function () {
        console.log('系统错误')
      }
    })
  },
  //性别选择
  bindGenderChange : function (e){
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //出生日期绑定值
  bindDateChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    this.data.birthDate = e.detail.value
  },
  //普通用户注册信息
  onChange(e){ 
    this.data.userInforArr[e.target.id-1] =  e.detail
    //console.log(this.data.userInforArr)
  },
  bindHallChange (e){
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      hallIndex: e.detail.value
    })
    this.data.hallId = e.detail.value
  },
  //复选框爱心角色选项
  onNextChange(e) {
    var that =this
    for(var i = 0; i < e.detail.length;i++){
      if(e.detail[i] == "201"){
        that.data.isDriver = true
      }
      else if(e.detail[i] == "202"){
        that.data.isVistors = true
      }
    }
    if(e.detail.length ==0){
      that.data.isVistors = false
      that.data.isDriver = false
    }
    else if (e.detail.length == 1){
      if (e.detail == "201"){
        that.data.isDriver = true
        that.data.isVistors = false
      }
      else {
        that.data.isVistors = true
        that.data.isDriver = false
      }
    }
    /*if (e.detail.includes('201')){
      that.data.isDriver = true
    } else if (e.detail.includes('202')){
      that.data.isVistors = true
    } else {
      that.data.isVistors = false
      that.data.isDriver = false
    }*/
    //console.log(e.detail) 
    that.data.volunteers =e.detail
    this.setData({
      result: e.detail,
      isDriver: that.data.isDriver,
      isVistors: that.data.isVistors
    });
  },

  //司机注册信息
  onDriverChange(e){
    this.data.driverInforArr[e.target.id - 1] = e.detail
    //console.log(this.data.driverInforArr)
  },
  //探访员注册信息
  contentChange(e){
    //console.log(e.detail)
    this.setData({
      content: e.detail.value
    })
    this.data.vistorExp = e.detail.value
  },

  sumbit(){
    var that = this
    if (this.data.userInforArr.length < 6){
      Toast('请填写必填信息')
      return
    } 
    else {
      this.data.userInfo.name = this.data.userInforArr[0]
      this.data.userInfo.address = this.data.userInforArr[1]
      this.data.userInfo.phone = this.data.userInforArr[2]
      this.data.userInfo.believeTime = this.data.userInforArr[3]
      this.data.userInfo.freeTime = this.data.userInforArr[4]
      this.data.userInfo.spouseBelief = this.data.userInforArr[5]
    }
    this.data.userInfo.gender = this.data.index
    this.data.userInfo.birthday = this.data.birthDate
    this.data.userInfo.hallId = this.data.hallData[that.data.hallIndex].hallId
    if (this.data.driverInforArr.length > 0){
      if (this.data.driverInforArr.length > 1 && this.data.driverInforArr.length < 3) {
        Toast('请填写必填信息')
        return
      }
      else {
        this.data.userInfo.carNumber = this.data.driverInforArr[0]
        this.data.userInfo.carInfo = this.data.driverInforArr[1]
        this.data.userInfo.familiarArea = this.data.driverInforArr[2]
      }
    }
    this.data.userInfo.visitingExperience = this.data.vistorExp
    console.log(this.data.userInfo)
    console.log(this.data.roles.concat(that.data.volunteers))
    wx.login({
      success: function (r) {
        var code = r.code; //登录凭证
        console.log(r)
        if (code) {
          //2、调用获取用户信息接口
          wx.getUserInfo({
            success: function (res) {
              //3.请求自己的服务器，解密用户信息 获取unionId等加密信息
              wx.request({
                url: app.globalData.ipAdress +'register',
                method: 'post',
                header: {
                  'content-type': 'application/json'
                },
                data: {
                  encryptedData: res.encryptedData,
                  iv: res.iv,
                  code: code,
                  userInfo: that.data.userInfo,
                  roles: that.data.roles.concat(that.data.volunteers)
                },
                success: function (data) {
                  console.log(data)
                  console.log("data====" + data.data)
                  //进行处理
                  app.router.navigateTo({
                    url: '../registersuccess/registersuccess',
                  })
                },
                fail: function () {
                  console.log('系统错误')
                }
              })
            },
            fail: function () {
              console.log('获取用户信息失败')
            }
          })
        } else {
          console.log('获取用户登录态失败！' + r.errMsg)
        }
      },
      fail: function () {
        console.log("登陆失败")
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