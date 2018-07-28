// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    pageIndex:1, //当前页码
    pageSize:10,  //一共多少条数据
    hasData:true,  //是否还有值
    id:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      id: options.id
    });
    wx.request({
      url: 'https://locally.uieee.com/categories/' + options.id
        + '/shops?_page=' + this.data.pageIndex + '&_limit=' + this.data.pageSize,
      success : (data) => {
        // console.log(data);
        this.setData({
          lists:data.data
        });
      }
    })
  },
  todetail:function(e){
    wx.navigateTo({
      url: '../listDetail/listDetail?id=' + e.currentTarget.dataset.id
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
      // console.log(111)
      if(!this.data.hasData){
        return;
      };
    let pageIndex = this.data.pageIndex;
      this.setData({
        pageIndex: pageIndex+1
      });
    wx.request({
      url: 'https://locally.uieee.com/categories/' + this.data.id
        + '/shops?_page=' + this.data.pageIndex + '&_limit=' + this.data.pageSize,
      success: (data) => {
        console.log(data);
        if(data.data.length===0){
          this.setData({
            hasData:false
          });
        }else{
          var arr = this.data.lists;
         arr.push(...data.data)  
          this.setData({
            lists: arr
          });
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})