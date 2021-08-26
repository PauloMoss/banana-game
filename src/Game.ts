import Player from "./Player";

export default class Game {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  gameIntervalId: number;
  bombIntervalId: number;
  fruitsIntervalId: number;
  bananaIntervalId: number;
  scoreIntervalId: number;
  intervalsIds: number[];
  player: Player;
  score: number;

  constructor(screenWidth: number, screenHeight: number, canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.canvas.width = screenWidth;
    this.canvas.height = screenHeight;
    this.context = this.canvas.getContext("2d");
  }

  start() {
    this.resetPlayer();
    this.startIntervals();
  }

  resetPlayer() {
    this.player = new Player(
      this.context,
      this.canvas.width / 2,
      this.canvas.height - 125
    );
  }

  onKeyDown(event: KeyboardEvent) {
    let moveX = 0;
    if (event.key === "ArrowLeft") {
      moveX = -1;
    } else if (event.key === "ArrowRight") {
      moveX = +1;
    } else return;
    this.player.moveTo(moveX);
  }

  gameLoop() {
    //this.updateState();
    this.renderGame();
  }

  renderGame() {
    this.clearScreen();
    this.player.draw();
  }

  startIntervals() {
    this.clearIntervals();
    const { setInterval } = window;

    this.intervalsIds = [setInterval(() => this.gameLoop(), 1000 / 60)];
  }

  clearIntervals() {
    this.intervalsIds?.forEach(clearInterval);
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
/*
      setInterval(() => this.spawnBomb(), 2000),
      setInterval(() => this.spawnFruit(), 1000),
      setInterval(() => this.spawnBanana(), 2000),*/
