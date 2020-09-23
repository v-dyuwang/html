import { request } from '../../request/index'
import runtime from '../../lib/runtime/runtime.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftTyle: [],
    rightType: [],
    currentIndex: 0,
    itemIndex: 0
    
  },
  catsList: [],
  handleSel(e) {
    const index = e.target.dataset.index
    let rightType = []
    rightType = this.catsList[index].children
    this.setData({
      rightType,
      currentIndex: index,
      itemIndex: 0
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCats()
    const Cates = wx.getStorageSync('cates')
    // if(!Cates) {
    //   this.getCats()
    // } else {
    //   if(Date.now() - Cates.time > 1000 * 10) {
    //     this.getCats()
    //   } else {
    //     this.catsList = Cates
    //     let leftTyle = this.catsList.map((v)=>v.cat_name)
    //     let rightType = this.catsList[0].children
    //     this.setData({
    //       leftTyle,
    //       rightType
    //     })
    //   }
    // }
  },
  getCats() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
    }).then(res => {
      this.catsList = res.data.message
      wx.setStorage({
        data: this.catsList,
        key: 'cates',
        time: Date.now()
      })
      let leftTyle = []
      let rightType = []
      leftTyle = this.catsList.map((v)=>v.cat_name)
      rightType = this.catsList[0].children
      console.log(rightType, '-----rightType')
      this.setData({
        leftTyle,
        rightType
      })
    }).catch(err => {
      console.log(err)
    })
  }
})