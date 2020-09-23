import {getSetting, chooseAddress, openSetting } from '../../utils/address'
Page({
  async handlechooseAddress () {
    try {
      const res = await getSetting()
      const scopeAddress = res.authSetting['scope.address']
      if(scopeAddress === false) {
        await openSetting()
      }
      const res1 = await chooseAddress()
      // 把res1存到本地存储中
      wx.setStorageSync('address', res1);
      console.log(res1)
    } catch (error) {
      console.log(error)
    }
  }
  
})