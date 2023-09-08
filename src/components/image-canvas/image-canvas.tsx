import { Component, Prop,State, Element } from '@stencil/core';
import { ContentDataImg, ContentDataText } from '../type';

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
    if( this.content[0]['type'] != 'image'){
      console.error('el primer valor del array tiene que ser de type image')
      return
    }
    this.canvas = this.__createCanvas();
    console.info("el canvas es", this.canvas)
    this.el.appendChild(this.canvas)
    const img = new Image();
    img.addEventListener('load', () =>  {
      this.imgLoading = false
      const ctx = this.canvas.getContext('2d');
      /*var anchoImgBg = 
      var altoImgBg  = */
      ctx.drawImage(img, 0, 0,this.content[0]['width'],this.content[0]['height']);
      this.__loadData() 
    })
    img.src = this.content[0]['any_string'];
  }


  __createCanvas() {
    const canvas = document.createElement('canvas')
    /*canvas.style.height = '25cm'
    canvas.style.width = '25cm'*/
    canvas.height = this.hCanvas
    canvas.width = this.wCanvas
    return canvas
  }

  __loadData() {
       const ctx = this.canvas.getContext('2d');
       let data = this.content;
       data.shift()
       data.forEach(item => {
         if( item.type ==='text' ){
            const iText = item as ContentDataText
            ctx.fillStyle = iText.canvasOptions.fillStyle || this.canvasFillStyle;
            ctx.font = iText.canvasOptions.font || this.fontCanvas;
            ctx.textAlign = iText.canvasOptions.textAlign as CanvasTextAlign || this.centerText as CanvasTextAlign;
            ctx.fillText(item.any_string, item.x, item.y);
         }
         if( item.type ==='image' ){
           const imgData = new Image();
           imgData.src = item.any_string;
           imgData.onload = function() {
               ctx.drawImage(imgData, item.x, item.y,item.width,item.height);
           };
         }
       });
  }

}
