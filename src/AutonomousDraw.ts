import Game from "./Game";
import { randomIntFromInterval } from "./helpers";
import Illustration from "./Illustration";

export default class AutonomousDraw extends Illustration {
  canvas;
  speedY;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    img: HTMLImageElement
  ) {
    super(context, 0, 0, img);

    this.canvas = canvas;
    const randomInitialPosition = randomIntFromInterval(0, this.canvas.width - 80);
    this.x = randomInitialPosition;

    this.speedY = 5;
  }

  move() {
    this.y += this.speedY;
  }
}
