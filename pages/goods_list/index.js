import { request } from '../../request/index'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tableList: [{
      id: '1',
      name: '综合',
      flag: true
    },{
      id: '2',
      name: '销量',
      flag: false
    },{
      id: '3',
      name: '价格',
      flag: false
    }],
    goodsList: [],
    total: '0',
    page: 0,
    cid: ''
  },
  params: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.params = {
      query: '',
      // cid: options.id,
      cid: '5',
      pagenum: '1',
      pagesize: '10',
      page: 0
    }
    this.getGoodsList(options.id)
  },
  getGoodsList() {
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search', data: this.params
    }).then(res => {
      
      this.setData({
        goodsList: [...res.data.message.goods, ...this.data.goodsList],
        total: res.data.message.total,
        page: Math.ceil(res.data.message.total / this.params.pagesize)
      })
    }).catch(err => {
      console.log(err)
    })
  },
  handleTableItem(e) {
    let { index } = e.detail
    let { tableList } = this.data
    tableList.forEach((v,i) => i === index ? v.flag = true : v.flag = false)
    this.setData({
      tableList
    })
  },
  onReachBottom() {
    if(this.params.pagenum <= this.data.page) {
      this.params.pagenum ++;
      this.getGoodsList()
    } else {
      wx.showToast({
        title: '没有数据了',
      });
    }
  },
  onPullDownRefresh() {
    this.params.pagenum  = '1'
    this.setData({goodsList: []})
    this.getGoodsList()
    wx.stopPullDownRefresh()
  },
})