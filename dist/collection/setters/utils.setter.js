import { SetText, SetImage, SetBarcode, SetQR } from ".";
import { OpcionTypes } from "./types";
export async function canvasSetter(canvas, layer) {
  const mapeador = {
    [OpcionTypes.text]: new SetText(canvas, layer),
    [OpcionTypes.image]: new SetImage(canvas, layer),
    [OpcionTypes.barcode]: new SetBarcode(canvas, layer),
    [OpcionTypes.qr]: new SetQR(canvas, layer)
  };
  return await mapeador[layer.type].run();
}
//# sourceMappingURL=utils.setter.js.map
