import { r as registerInstance, g as getElement } from './index-cca9a969.js';

const imageCanvasCss = ":host{display:block}";

const ImageCanvas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.centerText = 'start';
    this.bgImg = undefined;
    this.wCanvas = undefined;
    this.hCanvas = undefined;
    this.canvasFillStyle = 'black';
    this.fontCanvas = 'bold 12p Arial';
    this.content = undefined;
    this.imgLoading = true;
  }
  componentWillLoad() {
    this.canvas = this.__createCanvas();
    console.info("el canvas es", this.canvas);
    this.el.appendChild(this.canvas);
    const img = new Image();
    img.addEventListener('load', () => {
      this.imgLoading = false;
      const ctx = this.canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      this.__loadData();
    });
    img.src = this.bgImg;
  }
  __createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.height = this.hCanvas;
    canvas.width = this.wCanvas;
    return canvas;
  }
  __loadData() {
    const ctx = this.canvas.getContext('2d');
    const data = this.content;
    data.forEach(item => {
      if (item.type === 'text') {
        const iText = item;
        ctx.fillStyle = iText.canvasOptions.fillStyle || this.canvasFillStyle;
        ctx.font = iText.canvasOptions.font || this.fontCanvas;
        ctx.textAlign = iText.canvasOptions.textAlign || this.centerText;
        ctx.fillText(item.any_string, item.x, item.y);
      }
      if (item.type === 'image') {
        const imgData = new Image();
        imgData.src = item.any_string;
        imgData.onload = function () {
          ctx.drawImage(imgData, item.x, item.y, item.width, item.height);
        };
      }
    });
  }
  get el() { return getElement(this); }
};
ImageCanvas.style = imageCanvasCss;

export { ImageCanvas as image_canvas };

//# sourceMappingURL=image-canvas.entry.js.map