// pages/todolist/report/report.js
var app = getApp();
var upFiles = require('../../../utils/upFiles.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    roleIds : null,
    src : '',
    tempImagePaths : [],
    tempVideoPaths : '',
    upImgArr: [], //存图片
    maxUploadLen: 9,  //限制上传数量
    upVideoArr: [], //存视频
    upFilesBtn: true, 
    report: "",
    pray: "",
    upPra : {
      url: app.globalData.ipAdress + 'multimedias/upload',
      //url: 'http://222.195.149.104:8081/upload',
      filesPathsArr : [],
      name :'file',
      formData: {},
      startIndex : 0,
      successNumber  : 0,
      failNumber : 0,
      completeNumber : 0
    },
    visitDemandId : null
  },

  // 选择图片或者视频
  uploadFiles(e) {
    var that = this,
      type = e.currentTarget.dataset.type,
      maxUploadLen = that.data.maxUploadLen;
      //maxUploadVidLen = that.data.maxUploadVidLen;
    if (type == 'image') {
      upFiles.chooseImage(that, maxUploadLen);
    } else if (type == 'video') {
      upFiles.chooseVideo(that, maxUploadLen);
    }
  },

  // 删除上传图片
  del(e) {
    let that = this;
    wx.showModal({
      title: '温馨提示',
      content: '您确认要删除吗？',
      success(res) {
        if (res.confirm) {
          let delNum = e.currentTarget.dataset.index,
            delType = e.currentTarget.dataset.type,
            upImgArr = that.data.upImgArr,
            upVideoArr = that.data.upVideoArr;
          if (delType == 'image') {
            upImgArr.splice(delNum, 1)
            that.setData({
              upImgArr: upImgArr
            })
          } else if (delType == 'video') {
            //upVideoArr.splice(delNum, 1)
            that.setData({
              src: ""
            })
          }
          //console.log(that)
          let upFilesArr = upFiles.getPathArr(that);
          if (upFilesArr.length < that.data.maxUploadLen) {
            that.setData({
              upFilesBtn: true,
            })
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 预览图片
  previewImg(e) {
    let that = this,
      imgsrc = e.currentTarget.dataset.presrc,
      arr = that.data.upImgArr,
      preArr = [];
    arr.map(function (v, i) {
      preArr.push(v.path)
    })
    //console.log(preArr)
    wx.previewImage({
      current: imgsrc,
      urls: preArr
    })
  },
  //获取视频
  getLocalVideo: function () {
    var that = this;
    var session_key = wx.getStorageSync('session_key');
    wx.chooseVideo({
      maxDuration: 60,
      success: function (res1) {
        // 这个就是最终拍摄视频的临时路径了
        that.setData({
          src: res1.tempFilePath,
          duration: res1.duration,
          height: res1.height,
          size: res1.size,
          width: res1.width,
          videoshow: 'thumb'
        })
        wx.showToast({
          title: '选择成功',
          icon: 'succes',
          duration: 2000,
          mask: true
        })
      },
      fail: function () {
        console.error("获取本地视频时出错");
      }
    })
  },
  //上传视频
  uploadvideo: function () {
    var that = this;
    wx.showLoading({
      title: '上传中',
    })
    var src = this.data.src;
    console.log(src)
    wx.uploadFile({
      url: that.data.upPra.url,
      filePath: src,
      header: {
        'content-type': 'multipart/form-data'
      },
      name: 'file',//服务器定义的Key值
      success: function (e) {
        wx.hideLoading();
        /*if (typeof e.data != 'object') {
          e.data = e.data.replace(/\ufeff/g, "");//重点
          var data = JSON.parse(e.data);
          if (data.status == 1) {
            wx.showToast({
              title: '上传成功',
              icon: 'succes',
              duration: 1000,
              mask: true
            })
            setTimeout(function () {
              that.backHtml();
            }, 1000)
          } else if (data.status == 2) {
            wx.showToast({
              title: '文件过大',
              icon: 'succes',
              duration: 1000,
              mask: true
            })
          }
        }*/
      },
      fail: function () {
        wx.showToast({
          title: '上传失败',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }
    })
  },
  //待祈祷事项内容
  onPrayChange(e) {
    //console.log(e.detail)
    this.setData({
      content1: e.detail.value
    })
    this.data.pray = e.detail.value
  },

  //汇报内容
  onReportChange(e) {
    //console.log(e.detail)
    this.setData({
      content2: e.detail.value
    })
    this.data.report = e.detail.value
  },

  //提交探访汇报
  sumbit(){
    var that = this
    let upFilesArr = upFiles.getPathArr(this);
    this.data.upPra.filesPathsArr = upFilesArr
    this.data.upPra.formData = {
      token: app.globalData.sessionId,
      visitingDemandId: that.data.visitDemandId
    }
    //console.log(upFilesArr)
    //console.log(this.data.report)
    //console.log(this.data.pray)
    this.uploadvideo()
    upFiles.upFilesFun(this, this.data.upPra,0,function(){
      console.log('success')
    })
    wx.request({
      url: app.globalData.ipAdress + '/volunteer/submitVisitReport',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        token: app.globalData.sessionId,
        visitingDemandId: that.data.visitDemandId,
        prayerMatter: that.data.pray,
        visitingReportRemarks: that.data.report
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

  toHome(){
    wx.redirectTo({
      url: '../../homepages/homepages?role=' + wx.getStorageSync("rangeRoles"),
    })
  },

  submitReport(){
    this.sumbit()
    this.toHome()
  },
  //申请后期跟进
  follow(){
    this.sumbit()
    wx.redirectTo({
      url: '../follow/follow?visitDemandId=' + this.data.visitDemandId,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.data.roleIds = wx.getStorageSync("rangeRoles")
    this.data.visitDemandId = options.visitDemandId
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