import { AbstractSetter } from "./Abstract.setter";
export class SetText extends AbstractSetter {
  async run() {
    this.canvasContent.fillStyle = this.layer.canvasOptions.fillStyle;
    this.canvasContent.font = this.layer.canvasOptions.font;
    this.canvasContent.textAlign = this.layer.canvasOptions.textAlign;
    this.canvasContent.fillText(this.layer.data, this.layer.x, this.layer.y);
  }
}
//# sourceMappingURL=SetText.setter.js.map
