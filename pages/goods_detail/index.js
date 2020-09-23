// pages/goods_detail/index.js
import { request } from '../../request/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {}
  },
  goodsInfo: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    const { id } = options
    console.log(id, '-----console.log(options.id)')
    this.getGoodsDetail(id)
  },
  async getGoodsDetail(id) {
    let params = {
      goods_id: id || '43986'
    }
    const goodsObj = await request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
      data: params
    })
    this.setData({
      goodsObj: goodsObj.data.message
    })
    console.log(goodsObj, '-------goodsObj')
  },
  handleGoCart () {
    // 获取缓存中的购物车
    let cart = wx.getStorageSync('cart') || []
    // 判断商品是否在购物车中
    let index = cart.findIndex(v=> v.id === this.goodsInfo.id)
    if (index === -1) {
      // 不存在
      this.goodsInfo.num = 1
      cart.push(this.goodsInfo)
    } else {
      cart[index].num ++
      // ++
    }
    wx.setStorageSync('cart', cart)
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      mask: true
    });
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