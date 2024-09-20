import { AbstractSetter } from "./Abstract.setter";
export class SetText extends AbstractSetter {
  async run() {
    this.canvasContent.fillStyle = this.layer.canvasOptions.fillStyle;
    this.canvasContent.font = this.layer.canvasOptions.font;
    this.canvasContent.textAlign = this.layer.canvasOptions.textAlign;
    if ('maxWidth' in this.layer.canvasOptions) {
      let words = this.layer.data.split(' ');
      let line = '';
      let startY = this.layer.y;
      if (!('lineSpace' in this.layer.canvasOptions)) {
        throw new Error("Es necesario un lineSpace cuando se utiliza maxWidth");
      }
      let space = this.layer.canvasOptions.lineSpace;
      for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' ';
        let metrics = this.canvasContent.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > this.layer.canvasOptions.maxWidth && i > 0) {
          this.canvasContent.fillText(line, this.layer.x, startY);
          line = words[i] + ' ';
          startY = startY + space;
        }
        else {
          line = testLine;
        }
      }
      this.canvasContent.fillText(line, this.layer.x, startY);
    }
    else {
      this.canvasContent.fillText(this.layer.data, this.layer.x, this.layer.y);
    }
  }
}
//# sourceMappingURL=SetText.setter.js.map
