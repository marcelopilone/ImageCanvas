import { r as registerInstance, g as getElement } from './index-b52ae1b3.js';

const imageCanvasCss = ":host{display:block}";

const ImageCanvas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.centerText = 'start';
    this.idCanvas = undefined;
    this.wCanvas = undefined;
    this.hCanvas = undefined;
    this.wCanvasCss = undefined;
    this.hCanvasCss = undefined;
    this.wImageBg = 0;
    this.hImageBg = 0;
    this.canvasFillStyle = 'black';
    this.fontCanvas = 'bold 12p Arial';
    this.content = undefined;
    this.imgLoading = true;
  }
  componentWillLoad() {
    if (this.content[0]['type'] != 'image') {
      console.error('el primer valor del array tiene que ser de type image');
      return;
    }
    this.canvas = this.__createCanvas();
    console.info("el canvas es", this.canvas);
    this.el.appendChild(this.canvas);
    const img = new Image();
    img.addEventListener('load', () => {
      this.imgLoading = false;
      const ctx = this.canvas.getContext('2d');
      /*var anchoImgBg =
      var altoImgBg  = */
      ctx.drawImage(img, 0, 0, this.content[0]['width'], this.content[0]['height']);
      this.__loadData();
    });
    img.src = this.content[0]['any_string'];
  }
  __createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = this.idCanvas;
    if (this.wCanvasCss != undefined) {
      canvas.style.width = this.wCanvasCss + "cm";
    }
    if (this.hCanvasCss != undefined) {
      canvas.style.height = this.hCanvasCss + 'cm';
    }
    canvas.height = this.hCanvas;
    canvas.width = this.wCanvas;
    return canvas;
  }
  __loadData() {
    const ctx = this.canvas.getContext('2d');
    let data = this.content;
    data.shift();
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