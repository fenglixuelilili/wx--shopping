// pages/listDetail/listDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    imgList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'https://locally.uieee.com/shops/' + options.id,
        success:(data)=>{
          // console.log(data.data);
          var imgarr = data.data.images.slice(0,5);
          this.setData({
            list:data.data,
            imgList: imgarr
          });
          console.log(this.data.list)
        }
      })
  },
  // 点击图片预览
  imgView:function(e){
    console.log(e);
    wx.previewImage({
      current: e.currentTarget.dataset.imgurl,
      urls: this.data.list.images
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