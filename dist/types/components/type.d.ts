
export enum OpcionTypes {
    text= "text",
    image = "image",
    qr = "qr",
    barcode = "barcode"
}
export class ContentData {
    "any_string": string
    "x": number
    "y": number
}

export type OpsText = {
    "font": string
    "fillStyle": string
    "textAlign": string
}

export class ContentDataText extends ContentData {
    "type": OpcionTypes.text
    "canvasOptions": OpsText
}


export type OpsImg = {
    "width": number // valid if type of image is image
    "height": number
}
export class ContentDataImg extends ContentData {
    "type": OpcionTypes.image 
    "canvasOptions":  OpsImg
    
}


export enum QRLevels {
    L = "L",
    M = "M",
    Q = "Q",
    H = "H"
}

export type OpsQR = {
    "level": QRLevels
    "text": string,
    "width": number,
    "height": number,
}
export class ContentDataQR extends ContentData {
    "type": OpcionTypes.qr 
    "canvasOptions":  OpsQR
    
}


export type Opsbarcode = {
    "width": number // valid if type of image is image
    "height": number
}
export class ContentDataBarcode extends ContentData {
    "type": OpcionTypes.barcode
    "canvasOptions":  Opsbarcode
    
}