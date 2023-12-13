import { SetText, SetImage, SetBarcode, SetQR } from "."
import { Layer } from "../components"
import { ContentDataBarcode, ContentDataImg, ContentDataQR, ContentDataText } from "../components/type"
import { OpcionTypes } from "./types"

export async function canvasSetter( canvas:CanvasRenderingContext2D,layer:Layer ){
    const mapeador = {
        [OpcionTypes.text]:new SetText(canvas,layer as ContentDataText),
        [OpcionTypes.image]:new SetImage(canvas,layer as ContentDataImg),
        [OpcionTypes.barcode]:new SetBarcode(canvas,layer as ContentDataBarcode),
        [OpcionTypes.qr]:new SetQR(canvas,layer as ContentDataQR)
    }
    return await mapeador[layer.type].run()
}