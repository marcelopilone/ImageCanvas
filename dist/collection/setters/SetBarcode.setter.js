import { AbstractSetter } from "./Abstract.setter";
import JsBarcode from "jsbarcode";
export class SetBarcode extends AbstractSetter {
  async run() {
    return new Promise((resolve, rejects) => {
      var canvas = document.createElement("canvas");
      JsBarcode(canvas, this.layer.data, {
        format: "CODE39",
        width: this.layer.canvasOptions.width_barcode,
        height: this.layer.canvasOptions.height_barcode,
        background: this.layer.canvasOptions.background,
        lineColor: this.layer.canvasOptions.lineColor,
        displayValue: ("displayValue" in this.layer.canvasOptions) ? this.layer.canvasOptions.displayValue : true,
      });
      let base64Barcode = canvas.toDataURL("image/png");
      const imgData = new Image();
      imgData.src = base64Barcode;
      try {
        imgData.onload = () => {
          this.canvasContent.drawImage(imgData, this.layer.x, this.layer.y, this.layer.canvasOptions.width, this.layer.canvasOptions.height);
          resolve();
        };
      }
      catch (error) {
        rejects(error);
      }
    });
  }
}
//# sourceMappingURL=SetBarcode.setter.js.map
