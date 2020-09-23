// components/carts/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tableList: {
      type: Array,
      defaule: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleSel(e) {
      const { index }  = e.currentTarget.dataset
      this.triggerEvent("traCheckedNum", {index} )
      // this.triggerEvent("tableItem", index)
    }
  }
})
