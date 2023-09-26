import { r as registerInstance, g as getElement } from './index-43d780d7.js';

var OpcionTypes;
(function (OpcionTypes) {
  OpcionTypes["text"] = "text";
  OpcionTypes["image"] = "image";
  OpcionTypes["qr"] = "qr";
  OpcionTypes["barcode"] = "barcode";
})(OpcionTypes || (OpcionTypes = {}));
function canvasSetter(canvas, layer) {
  const mapeador = {
    [OpcionTypes.text]: new SetText(canvas, layer),
    [OpcionTypes.image]: new SetImage(canvas, layer),
    [OpcionTypes.barcode]: new SetBarcode(canvas, layer),
    [OpcionTypes.qr]: new SetQR(canvas, layer)
  };
  return mapeador[layer.type].run();
}
class SeteoTipoCanvas {
  constructor(c, l) {
    this.canvasContent = c;
    this.layer = l;
  }
  run() { }
}
class SetImage extends SeteoTipoCanvas {
  run() {
    console.info('entrooo');
    const imgData = new Image();
    imgData.src = this.layer.any_string;
    imgData.onload = () => {
      this.canvasContent.drawImage(imgData, this.layer.x, this.layer.y, this.layer.width, this.layer.height);
    };
  }
}
class SetText extends SeteoTipoCanvas {
  run() {
    this.canvasContent.fillStyle = this.layer.canvasOptions.fillStyle;
    this.canvasContent.font = this.layer.canvasOptions.font;
    this.canvasContent.textAlign = this.layer.canvasOptions.textAlign;
    this.canvasContent.fillText(this.layer.any_string, this.layer.x, this.layer.y);
  }
}
class SetQR extends SeteoTipoCanvas {
  run() {
    console.log(this.layer);
  }
}
class SetBarcode extends SeteoTipoCanvas {
  run() {
    console.log(this.layer);
  }
}

const imageCanvasCss = ":host{display:block}";

const ImageCanvas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.width = undefined;
    this.height = undefined;
    this.canvasFillStyle = 'black';
    this.layers = [];
    this.imgLoading = true;
  }
  handlerLayerChange() {
    console.info('entrooo');
    this.__loadData();
  }
  componentWillLoad() {
    this.el.style.height = this.height;
    this.el.style.width = this.width;
    this.canvas = this.__createCanvas();
    this.el.appendChild(this.canvas);
    this.__loadData();
  }
  __createCanvas() {
    this.canvas = document.createElement('canvas');
    this.__resizeCanvas();
    return this.canvas;
  }
  __resizeCanvas() {
    this.canvas.height = this.el.offsetHeight;
    this.canvas.width = this.el.offsetWidth;
  }
  __loadData() {
    console.info('entrooo');
    const ctx = this.canvas.getContext('2d');
    let data = this.layers;
    data.forEach(l => {
      canvasSetter(ctx, l);
    });
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "layers": ["handlerLayerChange"]
  }; }
};
ImageCanvas.style = imageCanvasCss;

export { ImageCanvas as image_canvas };

//# sourceMappingURL=image-canvas.entry.js.map