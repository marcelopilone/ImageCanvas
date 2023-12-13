import { ContentDataBarcode } from "../components/type"
import { AbstractSetter } from "./Abstract.setter"
import JsBarcode from 'jsbarcode'


export class SetBarcode extends AbstractSetter{
    layer: ContentDataBarcode
    async run(){
        //JsBarcode(this.canvasContent, "Hello");
        var number = '12345678';

        JsBarcode("#barcode", number, {
            text: this.layer.data,
            width: 2,
            height: 50,
            fontSize: 15,
        });

        var svg = document.getElementById('barcode');
        console.info('svg',svg)

        var xml = new XMLSerializer().serializeToString(svg);

        var base64 = 'data:image/svg+xml;base64,' + btoa(xml);
        console.log('base64',base64)
    }
}
