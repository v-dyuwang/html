//Page Object
import { request } from '../../request/index.js'
Page({
  data: {
    swiperList: [],
    cartList: [],
    floorList: [],
    currentIndex: 0,
  },
  //options(Object)
  onLoad: function(options){
    this.getSwiperList();
    this.getCartList()
    this.getFloorList()
  },
  getSwiperList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    }).then(res => {
      this.setData({
        swiperList: res.data.message
      })
    }).catch(err => {
      console.log(err)
    })
  },
  getCartList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
    }).then(res => {
      this.setData({
        cartList: res.data.message
      })
    }).catch(err => {
      console.log(err)
    })
  },
  getFloorList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
    }).then(res => {
      this.setData({
        floorList: res.data.message
      })
    }).catch(err => {
      console.log(err)
    })
  },
  
});