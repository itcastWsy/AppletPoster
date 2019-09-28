
import regeneratorRuntime from '../../lib/runtime/runtime';
import { getImageInfo, canvasToTempFilePath, saveImageToPhotosAlbum } from "../../wxAsync/index.js";
Page({
  data: {
    // 默认的canvas的宽度
    canvasWidth: 1,
    // 默认的canvas高度
    canvasHeight: 1,
    // 最终生成的图片路径
    resSrc: ""
  },
  // 全局变量
  saveImgSrc: "",
  async onLoad() {
    // 红旗图片
    const flagSrc = "https://632d-c-73e071-1252056196.tcb.qcloud.la/3434.jpg?sign=a4f1c2106d1e61551829c2f99820c0ba&t=1569678566";
    // const baseSrc = "https://632d-c-73e071-1252056196.tcb.qcloud.la/92637.jpg?sign=8952d1eaa69a35510418fe25dc25d6c5&t=1569678606";
    // 上个页面选择的图片路径 柯南图片
    const baseSrc = wx.getStorageSync("src");
    // 设备像素比
    const { pixelRatio } = wx.getSystemInfoSync();

    // 获取 画布实例
    const context = wx.createCanvasContext('firstCanvas');
    console.log(context);
    // 下载到本地的 柯南图片
    const baseImg = await getImageInfo(baseSrc);
    // 下载到本地的 红旗图片
    const flagImg = await getImageInfo(flagSrc);
    // 将canvas的宽度设置中 图片的宽度
    const canvasWidth = baseImg.width + "px";
    // 将canvas的宽度设置中 图片的高度
    const canvasHeight = baseImg.height + "px";
    //  setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）。
    // 因此需要将 描绘 图片的步骤写在回调中，否则 真机调试有bug！
    this.setData({ canvasWidth, canvasHeight }, () => {
      // 如果个别机型出现图片失败错误，可以加上定时器。
      setTimeout(() => {
        // 先将柯南 描绘到画布上
        context.drawImage(baseImg.path, 0, 0, baseImg.width, baseImg.height);
        // 把红旗 描绘到画布上
        context.drawImage(flagImg.path, baseImg.width - (pixelRatio * 50), baseImg.height - (pixelRatio * 50), (pixelRatio * 50), (pixelRatio * 50));
        context.draw(true, async () => {
          // 将 画布生成 成图片
          const res1 = await canvasToTempFilePath({
            canvasId: "firstCanvas"
          });
          // 让图片显示 合成后的效果
          this.setData({ resSrc: res1.tempFilePath })
          // 保存起来，当点击保存图片时调用
          this.saveImgSrc = res1.tempFilePath;
        });
      }, 100);
    });
  },

  // 点击保存图片
  handleSave() {
    saveImageToPhotosAlbum(this.saveImgSrc);
  }
})
