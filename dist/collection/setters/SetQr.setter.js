import { AbstractSetter } from "./Abstract.setter";
import QRCode from "qrcode";
export class SetQR extends AbstractSetter {
  async run() {
    return new Promise((resolve, rejects) => {
      QRCode.toDataURL(this.layer.data, this.layer.canvasOptions.opts)
        .then(urlImage => {
        const imgData = new Image();
        imgData.src = urlImage;
        try {
          imgData.onload = () => {
            this.canvasContent.drawImage(imgData, this.layer.x, this.layer.y, this.layer.canvasOptions.width, this.layer.canvasOptions.height);
            resolve();
          };
        }
        catch (error) {
          rejects(error);
        }
      })
        .catch(err => {
        console.error(err);
      });
    });
  }
}
//# sourceMappingURL=SetQr.setter.js.map
