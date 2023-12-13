import { ContentDataText } from "../components/type";
import { AbstractSetter } from "./Abstract.setter";
export declare class SetText extends AbstractSetter {
  layer: ContentDataText;
  run(): Promise<void>;
}
