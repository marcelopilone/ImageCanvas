import { ContentDataBarcode, ContentDataImg, ContentDataQR, ContentDataText, Layer } from "../components/type";

export enum OpcionTypes {
    text= "text",
    image = "image",
    qr = "qr",
    barcode = "barcode"
}

export function canvasSetter( canvas:CanvasRenderingContext2D,layer:Layer ){
    const mapeador = {
        [OpcionTypes.text]:new SetText(canvas,layer as ContentDataText),
        [OpcionTypes.image]:new SetImage(canvas,layer as ContentDataImg),
        [OpcionTypes.barcode]:new SetBarcode(canvas,layer as ContentDataBarcode),
        [OpcionTypes.qr]:new SetQR(canvas,layer as ContentDataQR)
    }
    return mapeador[layer.type].run()
}

abstract class SeteoTipoCanvas {
    canvasContent: CanvasRenderingContext2D;
    layer: Layer;

    constructor(c:CanvasRenderingContext2D,l:Layer){
        this.canvasContent = c;
        this.layer = l;
    }

    run():void{}
}

class SetImage extends SeteoTipoCanvas{
    layer: ContentDataImg
    run(){
        console.info('entrooo')
        const imgData = new Image();
        imgData.src = this.layer.any_string;
        imgData.onload = ()=> {
            this.canvasContent.drawImage(imgData, this.layer.x, this.layer.y,this.layer.width,this.layer.height);
        };
    }
}

class SetText extends SeteoTipoCanvas{
    layer: ContentDataText
    run(){
        this.canvasContent.fillStyle = this.layer.canvasOptions.fillStyle;
        this.canvasContent.font = this.layer.canvasOptions.font;
        this.canvasContent.textAlign = this.layer.canvasOptions.textAlign as CanvasTextAlign;
        this.canvasContent.fillText(this.layer.any_string, this.layer.x, this.layer.y);
    }
}

class SetQR extends SeteoTipoCanvas{
    layer: ContentDataQR
    run(){
        console.log(this.layer)
    }
}

class SetBarcode extends SeteoTipoCanvas{
    layer: ContentDataBarcode
    run(){
        console.log(this.layer)
    }
}


