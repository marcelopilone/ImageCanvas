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
      for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' ';
        console.log('el test line es ', testLine);
        let metrics = this.canvasContent.measureText(testLine);
        console.log('las metricas son ', metrics);
        let testWidth = metrics.width;
        console.log('prueba de ancho ', testWidth);
        if (testWidth > Number(this.layer.canvasOptions.maxWidth) && i > 0) {
          this.canvasContent.fillText(line, this.layer.x, startY);
          line = words[i] + ' ';
          startY = startY + 20;
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
