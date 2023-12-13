import { ContentDataQR } from "../components/type";
import { AbstractSetter } from "./Abstract.setter";
export declare class SetQR extends AbstractSetter {
  layer: ContentDataQR;
  run(): Promise<void>;
}
