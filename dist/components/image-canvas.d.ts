import type { Components, JSX } from "../types/components";

interface ImageCanvas extends Components.ImageCanvas, HTMLElement {}
export const ImageCanvas: {
  prototype: ImageCanvas;
  new (): ImageCanvas;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
