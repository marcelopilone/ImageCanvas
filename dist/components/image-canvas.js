import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const imageCanvasCss = ":host{display:block}";

const ImageCanvas$1 = /*@__PURE__*/ proxyCustomElement(class ImageCanvas extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.centerText = 'start';
    this.wCanvas = undefined;
    this.hCanvas = undefined;
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
  get el() { return this; }
  static get style() { return imageCanvasCss; }
}, [0, "image-canvas", {
    "wCanvas": [2, "w-canvas"],
    "hCanvas": [2, "h-canvas"],
    "wImageBg": [2, "w-image-bg"],
    "hImageBg": [2, "h-image-bg"],
    "canvasFillStyle": [1, "canvas-fill-style"],
    "fontCanvas": [1, "font-canvas"],
    "content": [16],
    "imgLoading": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["image-canvas"];
  components.forEach(tagName => { switch (tagName) {
    case "image-canvas":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ImageCanvas$1);
      }
      break;
  } });
}

const ImageCanvas = ImageCanvas$1;
const defineCustomElement = defineCustomElement$1;

export { ImageCanvas, defineCustomElement };

//# sourceMappingURL=image-canvas.js.map