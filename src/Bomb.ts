import Dropable from "./Dropable";
import AutonomousDraw from "./AutonomousDraw";
import Game from "./Game";

export default class Bomb extends AutonomousDraw implements Dropable {
  img: HTMLImageElement;
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    const bomb = new Image();
    bomb.src = `../src/assets/sprites/bomb_circle.png`;
    super(canvas, context, bomb);
    this.img = bomb;
    this.x = 40;
    this.y = 50;
    this.radius = 20;
  }

  updateImageDrop(game: Game) {
    this.move();

    if (game.player.checkCollision(this)) {
      game.endGame();
    }
    if (this.y > game.canvas.height - 125) {
      game.deleteDropable(this);
    }
  }
}
