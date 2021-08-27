import Bomb from "./Bomb";
import Dropable from "./Dropable";
import Fruit from "./Fruit";
import Player from "./Player";

export default class Game {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  gameIntervalId: number;
  scoreIntervalId: number;
  intervalsIds: number[];
  dropables: Dropable[];
  player: Player;
  score: number;

  constructor(screenWidth: number, screenHeight: number, canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = screenWidth;
    this.canvas.height = screenHeight;
    this.context = this.canvas.getContext("2d");
  }

  start() {
    this.resetPlayerAndDropables();
    this.startIntervals();
  }

  resetPlayerAndDropables() {
    this.player = new Player(
      this.context,
      this.canvas.width / 2,
      this.canvas.height - 125
    );
    this.dropables = [];
    this.score = 0;
  }

  spawnFruit() {
    this.dropables.push(new Fruit(this.canvas, this.context));
  }
  spawnBomb() {
    this.dropables.push(new Bomb(this.canvas, this.context));
  }

  deleteDropable(dropable: Dropable) {
    this.dropables = this.dropables.filter((d) => d !== dropable);
  }

  updateScore(newScore: number) {
    const element = document.querySelector(".score") as HTMLElement;

    if (newScore - this.score > 100) {
      element.classList.add("highlight");
      setTimeout(() => element.classList.remove("highlight"), 100);
    }

    this.score = newScore;
    element.innerText = "Score: " + this.score.toFixed(1);
  }

  gameLoop() {
    this.updateImageDrop();
    this.renderGame();
  }

  renderGame() {
    this.clearScreen();
    this.player.drawImage();
    this.dropables.forEach((dropable) => dropable.drawImage());
  }

  updateImageDrop() {
    this.dropables.forEach((dropable) => dropable.updateImageDrop(this));
  }

  startIntervals() {
    this.clearIntervals();
    const { setInterval } = window;

    this.intervalsIds = [
      setInterval(() => this.gameLoop(), 1000 / 60),
      setInterval(() => this.spawnFruit(), 1000),
      setInterval(() => this.spawnBomb(), 2000),
    ];
  }

  clearIntervals() {
    this.intervalsIds?.forEach(clearInterval);
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  onKeyDown(event: KeyboardEvent) {
    let moveX;
    if (event.key === "ArrowLeft") {
      moveX = -1;
    } else if (event.key === "ArrowRight") {
      moveX = +1;
    } else return;
    this.player.moveTo(moveX, this.canvas);
  }
  endGame() {
    this.clearIntervals();

    setTimeout(() => {
      alert(`Fim do jogo! Você fez ${this.score.toFixed(1)} pontos!`);
    }, 2000);
  }
}
/*
      
      */
