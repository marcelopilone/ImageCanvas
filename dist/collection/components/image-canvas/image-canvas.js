import { h } from "@stencil/core";
import { canvasSetter } from "../../setters/utils.setter";
export class ImageCanvas {
  constructor() {
    this.width = undefined;
    this.height = undefined;
    this.canvasFillStyle = 'black';
    this.layers = [];
    this.imgLoading = true;
  }
  handlerLayerChange() {
    this.__loadData();
  }
  async componentWillLoad() {
    this.canvas = this.__createCanvas();
    this.el.appendChild(this.canvas);
    await this.__loadData();
  }
  __createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    return this.canvas;
  }
  async __loadData() {
    const ctx = this.canvas.getContext('2d');
    let data = this.layers;
    for (var i = 0; i < data.length; i++) {
      await canvasSetter(ctx, data[i]);
    }
  }
  render() {
    if (this.layers.length == 0) {
      return h("p", { style: { "color": "red" } }, "ERR: Debe ejecutar $(\"image-cangas\").layers = layers[] para poder mostrar algo)");
    }
  }
  static get is() { return "image-canvas"; }
  static get originalStyleUrls() {
    return {
      "$": ["image-canvas.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["image-canvas.css"]
    };
  }
  static get properties() {
    return {
      "width": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Width number"
        },
        "attribute": "width",
        "reflect": false
      },
      "height": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Height number"
        },
        "attribute": "height",
        "reflect": false
      },
      "canvasFillStyle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Canvas fillStroke"
        },
        "attribute": "canvas-fill-style",
        "reflect": false,
        "defaultValue": "'black'"
      },
      "layers": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "Layer[]",
          "resolved": "Layer[]",
          "references": {
            "Layer": {
              "location": "import",
              "path": "../type",
              "id": "src/components/type.d.ts::Layer"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "canvas.content"
        },
        "defaultValue": "[]"
      }
    };
  }
  static get states() {
    return {
      "imgLoading": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "layers",
        "methodName": "handlerLayerChange"
      }];
  }
}
//# sourceMappingURL=image-canvas.js.map
