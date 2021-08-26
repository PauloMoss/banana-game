import Illustration from "./Illustration";

export default class Player extends Illustration {
  img: HTMLImageElement;

  constructor(context: CanvasRenderingContext2D, initialX: number, initialY: number) {
    const allien = new Image();
    allien.src = "../src/assets/sprites/alien.png";
    super(context, initialX, initialY, allien);
    this.img = allien;
  }

  moveTo(delta: number) {
    delta = delta * 10;
    this.x = this.x + delta;
  }
}
