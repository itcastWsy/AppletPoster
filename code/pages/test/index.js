Page({
  onLoad() {
    // this.drawLine();
    // this.drawMyReact([ { x: 20, y: 20 }, { x: 20, y: 100 }, { x: 100, y: 100 }, { x: 100, y: 20 } ])
    // this.drawStrokeReact();
    // this.drawArc();
    // this.drawFillReact();
    // this.drawStrokeText();
    // this.drawColorLine();
    // this.drawWidthLine();
    // this.drawFillColorReact();
    this.drawFontText();
  },
  drawLine() {
    // 2 获取画布上下文对象
    const context = wx.createCanvasContext("firstCanvas");
    // 3 定起点
    context.moveTo(10, 10);
    // 4 定终点
    context.lineTo(300, 150);
    // 5 连线
    context.stroke();
    // 6 上色
    context.draw();
  },
  drawMyReact(pointArr) {
    const context = wx.createCanvasContext("firstCanvas");
    context.moveTo(pointArr[0].x, pointArr[0].y);
    pointArr.forEach((v, i) => {
      context.lineTo(v.x, v.y);
    })
    context.lineTo(pointArr[0].x, pointArr[0].y);
    context.stroke();
    context.draw();
  },
  drawStrokeReact() {
    // 1 获取画布上下文对象
    const context = wx.createCanvasContext("firstCanvas");
    // 2 调用canvas内置的画“矩形”的方法
    context.strokeRect(10, 10, 100, 100);
    // 3 上色 
    context.draw();
  },
  drawArc() {
    // 1 获取画布上下文对象
    const context = wx.createCanvasContext("firstCanvas");
    // context.arc(圆心的横坐标X,圆心的纵坐标Y, 半径的长度, 开始的弧度, 结束的弧度);
    // 2 调用内置的画 “圆弧” 的方法
    context.arc(100, 100, 100, this.angleToArc(0), this.angleToArc(90));
    // 3 开始描边
    context.stroke();
    // 4 上色
    context.draw();
  },
  /**
   * 将角度转为弧度
   * @param {number} angle 角度
   */
  angleToArc(angle) {
    return angle * Math.PI / 180;
  },
  drawFillReact() {
    // 1 获取画布上下文对象
    const context = wx.createCanvasContext("firstCanvas");
    // 2 调用canvas内置的 画填充 “矩形”的方法
    context.fillRect(10, 10, 100, 100);
    // 3 上色 
    context.draw();
  },
  drawStrokeText() {
    // 1 获取画布上下文对象
    const context = wx.createCanvasContext("firstCanvas");
    // 2 画 “文字”
    context.strokeText("hello world", 100, 100);
    // 3 上色 
    context.draw();
  },
  drawColorLine() {
    const context = wx.createCanvasContext("firstCanvas");
    context.moveTo(10, 10);
    context.lineTo(300, 150);
    // 5 修改颜色 需要在stroke之前修改
    context.strokeStyle = "red";
    context.stroke();
    context.draw();
  },
  drawWidthLine() {
    const context = wx.createCanvasContext("firstCanvas");
    context.moveTo(10, 10);
    context.lineTo(300, 150);
    // 设置线条宽度
    context.lineWidth = 20;
    context.stroke();
    context.draw();
  },
  drawFillColorReact() {
    const context = wx.createCanvasContext("firstCanvas");
    // 设置填充颜色
    context.fillStyle = "red";
    context.fillRect(10, 10, 100, 100);
    context.draw();
  },
  drawFontText() {
    const context = wx.createCanvasContext("firstCanvas");
    // 必须要同时提供 字号 和 字体
    context.font="10px  sans-serif";
    context.strokeText("10px", 10, 10);
    // 必须要同时提供 字号 和 字体
    context.font="50px  sans-serif";
    context.strokeText("50px", 50, 100);
    // 必须要同时提供 字号 和 字体
    context.font="80px  sans-serif";
    context.strokeText("80px", 80, 180);
    context.draw();
  }
})