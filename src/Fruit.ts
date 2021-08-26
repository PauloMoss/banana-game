import Illustration from "./Illustration";
import { Dropable } from "./Dropable";

export class Fruit extends Illustration implements Dropable {
  img: HTMLImageElement;

  drop() {}
}
