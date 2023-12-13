import { ContentDataText } from "../components/type";
import { AbstractSetter } from "./Abstract.setter";

export class SetText extends AbstractSetter{
    layer: ContentDataText
    async run(){
        this.canvasContent.fillStyle = this.layer.canvasOptions.fillStyle;
        this.canvasContent.font = this.layer.canvasOptions.font;
        this.canvasContent.textAlign = this.layer.canvasOptions.textAlign as CanvasTextAlign;
        this.canvasContent.fillText(this.layer.data, this.layer.x, this.layer.y);
    }
}