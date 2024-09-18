import { AbstractSetter } from "./Abstract.setter";
export class SetImage extends AbstractSetter {
  async run() {
    return new Promise((resolve, rejects) => {
      const imgData = new Image();
      imgData.src = this.layer.data;
      try {
        imgData.onload = () => {
          this.canvasContent.drawImage(imgData, this.layer.x, this.layer.y, this.layer.width, this.layer.height);
          resolve();
        };
      }
      catch (error) {
        rejects(error);
      }
    });
  }
}
//# sourceMappingURL=SetImage.setter.js.map
