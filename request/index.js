let ajaxTime = 0
export const request=(params) => {
  ajaxTime ++
  wx.showLoading({
    title: '加载中',
    mark: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      ...params,
      // url: api+ params.url,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        ajaxTime -- 
        if(ajaxTime === 0) {
          wx.hideLoading()
        }
      }
    })
  })
}