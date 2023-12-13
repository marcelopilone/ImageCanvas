import { Layer } from "../components/type";

export abstract class AbstractSetter {
    canvasContent: CanvasRenderingContext2D;
    layer: Layer;

    constructor(c:CanvasRenderingContext2D,l:Layer){
        this.canvasContent = c;
        this.layer = l;
    }

    async run():Promise<void>{}
}



