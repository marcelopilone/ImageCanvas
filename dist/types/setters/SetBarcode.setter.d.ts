import { ContentDataBarcode } from "../components/type";
import { AbstractSetter } from "./Abstract.setter";
export declare class SetBarcode extends AbstractSetter {
  layer: ContentDataBarcode;
  run(): Promise<void>;
}
