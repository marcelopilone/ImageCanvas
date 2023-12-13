import { ContentDataImg } from "../components/type";
import { AbstractSetter } from "./Abstract.setter";
export declare class SetImage extends AbstractSetter {
  layer: ContentDataImg;
  run(): Promise<void>;
}
