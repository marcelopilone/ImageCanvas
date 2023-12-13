import { Component, Prop,State, Element, Watch, h } from '@stencil/core';
import { Layer } from '../type';
import { canvasSetter } from '../../setters/utils.setter';

@Component({
  tag: 'image-canvas',
  styleUrl: 'image-canvas.css',
  shadow: false,
})
export class ImageCanvas {

  @Element() el: HTMLElement

  /**
   * Width number
   */
  @Prop() width!: number

  /**
   * Height number
   */
  @Prop() height!: number

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
    this.__loadData()
  }
  

  @State() imgLoading = true;
  private canvas: HTMLCanvasElement

  async componentWillLoad(){
    this.el.style.height = this.height + "px"
    this.el.style.width = this.width + "px"
    this.canvas = this.__createCanvas();
    this.el.appendChild(this.canvas)
    await this.__loadData()
  }

  __createCanvas() {
    this.canvas = document.createElement('canvas')
    this.canvas.height = this.height;
    this.canvas.width = this.width;
    return this.canvas
  }


  async __loadData() {
       const ctx = this.canvas.getContext('2d');
       let data = this.layers;
        for (var i = 0; i < data.length; i++) {
          await canvasSetter(ctx,data[i])
        }
  }

  render() {
    if (this.layers.length == 0) {
      return <p style={{"color":"red"}}>ERR: Debe ejecutar $("image-cangas").setLayers(Arr con layers[])</p>
    }
  }

}
