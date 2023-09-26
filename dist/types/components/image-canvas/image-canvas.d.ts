import { Layer } from '../type';
export declare class ImageCanvas {
  el: HTMLElement;
  /**
   * Width en px
   */
  width: string;
  /**
   * Height en px
   */
  height: string;
  /**
   * Canvas fillStroke
   */
  canvasFillStyle: string;
  /**
   * canvas.content
   */
  layers: Layer[];
  handlerLayerChange(): void;
  imgLoading: boolean;
  private canvas;
  componentWillLoad(): void;
  __createCanvas(): HTMLCanvasElement;
  __resizeCanvas(): void;
  __loadData(): void;
}
