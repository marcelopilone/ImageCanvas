import { ContentDataImg, ContentDataText } from '../type';
export declare class ImageCanvas {
  el: HTMLElement;
  bgImg: string;
  /**
   * With
   */
  wCanvas: number;
  /**
   * Height
   */
  hCanvas: number;
  /**
   * Canvas fillStroke
   */
  canvasFillStyle: string;
  /**
   * canvas.font  string style
   */
  fontCanvas: string;
  /**
   * canvas.content
   */
  content: ContentDataText[] | ContentDataImg[];
  imgLoading: boolean;
  private canvas;
  componentWillLoad(): void;
  __createCanvas(): HTMLCanvasElement;
  __loadData(): void;
}
