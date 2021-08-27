export default class Illustration {
  context;
  x;
  y;
  img;
  radius;

  constructor(
    context: CanvasRenderingContext2D,
    initialX: number,
    initialY: number,
    img: CanvasImageSource
  ) {
    this.context = context;
    this.x = initialX;
    this.y = initialY;
    this.img = img;
    this.radius = 40;
  }

  drawImage() {
    this.context.drawImage(this.img, this.x, this.y, 80, 100);
  }
}
