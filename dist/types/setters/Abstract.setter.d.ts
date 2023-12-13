import { Layer } from "../components/type";
export declare abstract class AbstractSetter {
  canvasContent: CanvasRenderingContext2D;
  layer: Layer;
  constructor(c: CanvasRenderingContext2D, l: Layer);
  run(): Promise<void>;
}
