import {getSetting, chooseAddress, openSetting } from '../../utils/address'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handlechooseAddress () {
    console.log(1111)
    const res = await getSetting()
    const scopeAddress = res.authSetting['scope.address']
    if(scopeAddress === true || scopeAddress === undefined) {
      const res1 = await chooseAddress()
      console.log(res1)
    } else {
      await openSetting()
      const res2 = await chooseAddress()
      console.log(res2)
    }
  }
})