import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const imageCanvasCss = ":host{display:block}";

const ImageCanvas$1 = /*@__PURE__*/ proxyCustomElement(class ImageCanvas extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get style() { return imageCanvasCss; }
}, [0, "image-canvas", {
    "bgImg": [1, "bg-img"],
    "wCanvas": [2, "w-canvas"],
    "hCanvas": [2, "h-canvas"],
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