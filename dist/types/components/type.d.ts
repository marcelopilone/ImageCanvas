
export enum OpcionTypes {
    text= "text",
    image = "image"
}
export class ContentData {
    "any_string": string
    "x": number
    "y": number
}

export class ContentDataText extends ContentData {
    "type": OpcionTypes.text
}

export class ContentDataImg extends ContentData {
    "type": OpcionTypes.image 
    "width": number // valid if type of image is image
    "height": number
}