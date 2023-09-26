import { Layer } from "../components/type";
export declare enum OpcionTypes {
  text = "text",
  image = "image",
  qr = "qr",
  barcode = "barcode"
}
export declare function canvasSetter(canvas: CanvasRenderingContext2D, layer: Layer): void;
