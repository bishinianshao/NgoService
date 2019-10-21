// pages/register/registerdetail/registerdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['男', '女'],//下拉列表的数据
    index: null,//选择的下拉列表下标
    userInforArr : [],
    birthDate : null,
    list: ['司机', '探访员'],
    result: [],
    isDriver : false,
    isVistors : false,
    driverInforArr : [],
    vistorExp: null
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },

  //性别选择
  bindGenderChange : function (e){
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
  onChange(e){ 
    this.data.userInforArr[e.target.id-1] =  e.detail
    console.log(this.data.userInforArr)
  },
  //复选框爱心角色选项
  onNextChange(e) {
    var that =this
    console.log(e.detail.length)

    for(var i = 0; i < e.detail.length;i++){
      if(e.detail[i] == "司机"){
        that.data.isDriver = true
      }
      else if(e.detail[i] == "探访员"){
        that.data.isVistors = true
      }
    }
    if(e.detail.length ==0){
      that.data.isVistors = false
      that.data.isDriver = false
    }
    else if (e.detail.length == 1){
      if (e.detail == "司机"){
        that.data.isDriver = true
        that.data.isVistors = false
      }
      else {
        that.data.isVistors = true
        that.data.isDriver = false
      }
    }
    this.setData({
      result: e.detail,
      isDriver: that.data.isDriver,
      isVistors: that.data.isVistors
    });

  },

  //司机注册信息
  onDriverChange(e){
    this.data.driverInforArr[e.target.id - 1] = e.detail
    console.log(this.data.driverInforArr)
  },
  //探访员注册信息
  contentChange(e){
    console.log(e.detail)
    this.setData({
      content: e.detail.value
    })
    this.data.vistorExp = e.detail.value
  },

  sumbit(){
    console.log(this.data.userInforArr)
    console.log(this.data.selectData[this.data.index])
    console.log(this.data.birthDate)
    console.log(this.data.driverInforArr)
    console.log(this.data.vistorExp)
    wx.navigateTo({
      url: '../registersuccess/registersuccess',
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