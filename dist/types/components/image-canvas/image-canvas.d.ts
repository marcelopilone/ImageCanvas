import { Layer } from '../type';
export declare class ImageCanvas {
  el: HTMLElement;
  /**
   * Width number
   */
  width: number;
  /**
   * Height number
   */
  height: number;
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
  componentWillLoad(): Promise<void>;
  __createCanvas(): HTMLCanvasElement;
  __loadData(): Promise<void>;
  render(): any;
}
