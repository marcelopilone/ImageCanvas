import { Component, Prop,State, Element } from '@stencil/core';
import { ContentDataImg, ContentDataText } from '../type';

@Component({
  tag: 'image-canvas',
  styleUrl: 'image-canvas.css',
})
export class ImageCanvas {

  @Element() el: HTMLElement

  @Prop() bgImg!: string 
  
  /**
   * With
   */
  @Prop() wCanvas: number

  /**
   * Height
   */
  @Prop() hCanvas: number


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


  componentWillLoad(){
    this.canvas = this.__createCanvas();
    console.info("el canvas es", this.canvas)
    this.el.appendChild(this.canvas)
    const img = new Image();
    img.addEventListener('load', () =>  {
      this.imgLoading = false
      const ctx = this.canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      this.__loadData() 
    })
    img.src = this.bgImg;
  }


  __createCanvas() {
    const canvas = document.createElement('canvas')
    canvas.height = this.hCanvas
    canvas.width = this.wCanvas
    return canvas
  }

  __loadData() {
       const ctx = this.canvas.getContext('2d');
       const data = this.content
       data.forEach(item => {
         if( item.type ==='text' ){
            const iText = item as ContentDataText
            ctx.fillStyle = iText.style || this.canvasFillStyle;
            ctx.font = iText.font || this.fontCanvas;
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
