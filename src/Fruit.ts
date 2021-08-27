import Dropable from "./Dropable";
import { randomFruit } from "./helpers";
import AutonomousDraw from "./AutonomousDraw";
import Game from "./Game";

export default class Fruit extends AutonomousDraw implements Dropable {
  img: HTMLImageElement;
  name: string;
  points: number;
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    const fruit = new Image();
    const fruitType = randomFruit();
    fruit.src = `../src/assets/sprites/${fruitType.name}.png`;
    super(canvas, context, fruit);
    this.img = fruit;
    this.name = fruitType.name;
    this.points = fruitType.points;
  }

  updateFruitDrop(game: Game) {
    this.move();

    if (game.player.checkCollision(this)) {
      let newScore = 0;
      if (this.points === null) {
        newScore = game.score * 2;
      } else {
        newScore = game.score + this.points;
      }
      console.log(newScore);
      game.deleteDropable(this);
      game.updateScore(newScore);
    }
    if (this.y > game.canvas.height - 125) {
      game.deleteDropable(this);
    }
  }
}
