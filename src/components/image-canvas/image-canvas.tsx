import { Component, Prop,State, Element } from '@stencil/core';
import { ContentDataImg, ContentDataText } from '../type';
import QRCode from 'qrcode'

@Component({
  tag: 'image-canvas',
  styleUrl: 'image-canvas.css',
})
export class ImageCanvas {

  @Element() el: HTMLElement

  /**
   * With
   */
  @Prop() wCanvas: number

  /**
   * Height
   */
  @Prop() hCanvas: number

  /**
   * With
   */
  @Prop() wImageBg: number = 0

  /**
   * Height
   */
  @Prop() hImageBg: number = 0


  /**
   * Canvas fillStroke
   */
  @Prop() canvasFillStyle: string = 'black'

  /**
   * canvas.font  string style
   */


  @Prop() fontCanvas:string = 'bold 12p Arial'
  
  
  /**
   * canvas.content 
   */
  @Prop() content: ContentDataText[]|ContentDataImg[]

  @State() imgLoading = true;

  private canvas: HTMLCanvasElement
  private centerText: string = 'start'

  componentWillLoad(){
    this.canvas = this.__createCanvas();
    console.info("el canvas es", this.canvas)
    this.el.appendChild(this.canvas)
    /*const img = new Image();
    img.addEventListener('load', () =>  {
      this.imgLoading = false
      const ctx = this.canvas.getContext('2d');
      /*var anchoImgBg = 
      var altoImgBg  = 
      ctx.drawImage(img, 0, 0,this.content[0]['width'],this.content[0]['height']);
    })
    img.src = this.content[0]['any_string'];*/
    this.__loadData() 
  }


  __createCanvas() {
    const canvas = document.createElement('canvas')
    canvas.height = this.hCanvas
    canvas.width = this.wCanvas
    return canvas
  }


   __loadData() {
       const ctx = this.canvas.getContext('2d');
       let data = this.content;

       data.forEach(item => {
         if( item.type === 'text' ){
            const iText = item as ContentDataText
            ctx.fillStyle = iText.canvasOptions.fillStyle || this.canvasFillStyle;
            ctx.font = iText.canvasOptions.font || this.fontCanvas;
            ctx.textAlign = iText.canvasOptions.textAlign as CanvasTextAlign || this.centerText as CanvasTextAlign;
            ctx.fillText(item.any_string, item.x, item.y);
         }
         if( item.type === 'image' ){
           const imgData = new Image();
           imgData.src = item.any_string;
           imgData.onload = function() {
               ctx.drawImage(imgData, item.x, item.y,item.width,item.height);
           };
         }
         if( item.type === 'qr' ){
            /*const qr = QRCode.toDataURL('asd')
            console.log(qr)*/
            const imagenQr = QRCode.toFile(item.any_string, 'Some text', {
              color: {
                dark: '#00F',
                light: '#0000'
              }
            }, function (err) {
              if (err) throw err
              console.log('done')
            });
            console.info('imagenQr',imagenQr)
          }
       });
  }

}
