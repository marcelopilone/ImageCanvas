import { Component, Prop,State, Element, Watch } from '@stencil/core';
import { Layer } from '../type';
import { canvasSetter } from '../../utils/CanvasSetters';

@Component({
  tag: 'image-canvas',
  styleUrl: 'image-canvas.css',
})
export class ImageCanvas {

  @Element() el: HTMLElement

  /**
   * Width en px
   */
  @Prop() width: string

  /**
   * Height en px
   */
  @Prop() height: string

  /**
   * Canvas fillStroke
   */
  @Prop() canvasFillStyle: string = 'black'

  /**
   * canvas.content 
   */
  @Prop() layers: Layer[] = []
  @Watch('layers')
  handlerLayerChange(){
    console.info('entrooo')

    this.__loadData()
  }

  @State() imgLoading = true;
  private canvas: HTMLCanvasElement

  componentWillLoad(){
    this.el.style.height = this.height
    this.el.style.width = this.width
    this.canvas = this.__createCanvas();

    this.el.appendChild(this.canvas)
    this.__loadData()
  }

  __createCanvas() {
    this.canvas = document.createElement('canvas')
    this.__resizeCanvas();
    return this.canvas
  }

  __resizeCanvas(){
    this.canvas.height = this.el.offsetHeight;
    this.canvas.width = this.el.offsetWidth;
  }

  __loadData() {
    console.info('entrooo')

       const ctx = this.canvas.getContext('2d');
       let data = this.layers;
       data.forEach(l => {
         canvasSetter(ctx,l)
       });
  }

}
