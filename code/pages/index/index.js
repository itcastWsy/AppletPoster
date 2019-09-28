Page({
  data: {
    src: ""
  },
  // 选择图片
  handleTap() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        this.setData({
          src: result.tempFilePaths[0]
        })
        // 保存图片路径
        wx.setStorageSync('src', this.data.src);
      }
    });
  },
  // 生成红旗
  handleCreateFlag() {
    // 跳转到结果页面
    wx.navigateTo({
      url: '/pages/result/index'
    });
  }
})