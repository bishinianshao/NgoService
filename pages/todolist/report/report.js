// pages/todolist/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],//本地图片地址数组
    picPaths: [],//网络路径
    src : '',
    report:"",
    pray:"",
  },

  //添加上传图片
  chooseImageTap: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#00000",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },
  // 图片本地路径
  chooseWxImage: function (type) {
    var that = this;
    var imgsPaths = that.data.imgs;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log('图片路径');
        console.log(res)
        //that.upImgs(res.tempFilePaths[0], 0) //调用上传方法
      }
    })
  },
  //上传服务器
  upImgs: function (imgurl, index) {
    var that = this;
    wx.uploadFile({
      url: 'https://xxxxxxxxxxxxxxxxxxxxxxxxxxxx',//
      filePath: imgurl,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: null,
      success: function (res) {
        console.log(res) //接口返回网络路径
        var data = JSON.parse(res.data)
        that.data.picPaths.push(data['msg'])
        that.setData({
          picPaths: that.data.picPaths
        })
        console.log(that.data.picPaths)
      }
    })
  },

  //选择视频
  chooseVideoTap: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从手机中选择', '用相机拍摄'],
      itemColor: "#00000",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxVideo('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxVideo('camera')
          }
        }
      }
    })
  },
  // 视频本地路径
  chooseWxVideo: function (type) {
    var that = this;
    wx.chooseVideo({
      sourceType: [type],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        console.log("视频路径")
        console.log(res)
        //that.setData({
        // src: res.tempFilePath,
        //})
        //that.uploadvideo(that.data.src)
      }
    })
  },
  //上传视频 
  uploadvideo: function (videourl) {
    var src = this.data.src;
    console.log("视频上传")
    wx.uploadFile({
      url: '',//服务器接口
      method: 'POST',
      filePath: videourl,
      header: {
        'content-type': 'multipart/form-data'
      },
      name: 'files',//服务器定义的Key值
      success: function () {
        console.log('视频上传成功')
      },
      fail: function () {
        console.log('接口调用失败')
      }
    })
  },

  //待祈祷事项内容
  contentChange1(e) {
    console.log(e.detail)
    this.setData({
      content1: e.detail.value
    })
    this.data.pray = e.detail.value
  },

  //汇报内容
  contentChange2(e) {
    console.log(e.detail)
    this.setData({
      content2: e.detail.value
    })
    this.data.report = e.detail.value
  },

  //提交探访汇报
  sumbit(){
    console.log(this.data.report)
    console.log(this.data.pray)
    wx.redirectTo({
      url: '../../homepages/homepages',
    })
  },

  //申请后期跟进
  follow(){
    console.log(this.data.report)
    console.log(this.data.pray)
    wx.redirectTo({
      url: '../follow/follow',
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