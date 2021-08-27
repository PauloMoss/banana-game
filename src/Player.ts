import Illustration from "./Illustration";

export default class Player extends Illustration {
  img: HTMLImageElement;

  constructor(context: CanvasRenderingContext2D, initialX: number, initialY: number) {
    const allien = new Image();
    allien.src = "../src/assets/sprites/alien.png";
    super(context, initialX, initialY, allien);
    this.img = allien;
  }

  moveTo(delta: number, canvas: HTMLCanvasElement) {
    if (this.x < 10 && delta < 0) return;
    if (this.x > canvas.width - 90 && delta > 0) return;
    delta = delta * 10;
    this.x = this.x + delta;
  }

  checkCollision(image: Illustration) {
    const distance = Math.sqrt((this.x - image.x) ** 2 + (this.y - image.y) ** 2);

    return distance < this.radius + image.radius;
  }
}
