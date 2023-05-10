import { r as registerInstance, h, e as Host } from './index-d854d76e.js';

const imageCanvasCss = ":host{display:block}";

const ImageCanvas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imageBackgroundUrl = 'https://afigestion.uejn.org.ar/img/ficha_afiliado.png';
    this.widthCanvas = 1014;
    this.heightCanvas = 644;
    this.json_data = [
      {
        nombre: "Alf come gato",
        type: "string",
        x: 390,
        y: 238
      },
      {
        numero_documento: "999999999",
        type: "number",
        x: 390,
        y: 315
      },
      {
        numero_afiliado: "8888888888",
        type: "number",
        x: 390,
        y: 389
      },
      {
        legajo: "77777777777",
        type: "number",
        x: 390,
        y: 465
      },
      {
        ubicacion: "55555555555",
        type: "string",
        x: 390,
        y: 540
      },
      {
        foto_perfil: "https://afigestion.uejn.org.ar/img/foto_carnet/1681746848_2.jpg",
        type: "string",
        x: 60,
        y: 177,
        width: 269,
        height: 250
      },
      {
        qr: "http://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fafigestion.uejn.org.ar%2Feventos%2Feventos_invitations%2Fview%2F003f6e46-e448-48a7-adc6-48c52ac64a17&chs=250x250&choe=UTF-8&chco=000000&chld=L|0",
        type: "string",
        x: 750,
        y: 360,
        width: 200,
        height: 200
      },
    ];
  }
  componentDidLoad() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const data = this.json_data;
    img.src = this.imageBackgroundUrl;
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      ctx.font = 'bold 28px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(data[0]['nombre'], data[0]['x'], data[0]['y']);
      ctx.fillText(data[1]['numero_documento'], data[1]['x'], data[1]['y']);
      ctx.fillText(data[2]['numero_afiliado'], data[2]['x'], data[2]['y']);
      ctx.fillText(data[3]['legajo'], data[3]['x'], data[3]['y']);
      ctx.fillText(data[4]['ubicacion'], data[4]['x'], data[4]['y']);
      const imgPerfil = new Image();
      imgPerfil.src = data[5]['foto_perfil'];
      imgPerfil.onload = function () {
        ctx.drawImage(imgPerfil, data[5]['x'], data[5]['y'], data[5]['width'], data[5]['height']);
      };
      const imgQr = new Image();
      imgQr.src = data[6]['qr'];
      imgQr.onload = function () {
        ctx.drawImage(imgQr, data[6]['x'], data[6]['y'], data[6]['width'], data[6]['height']);
      };
    };
  }
  render() {
    return (h(Host, null, h("canvas", { id: "canvas", width: this.widthCanvas, height: this.heightCanvas })));
  }
};
ImageCanvas.style = imageCanvasCss;

export { ImageCanvas as image_canvas };

//# sourceMappingURL=image-canvas.entry.js.map