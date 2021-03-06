import Game from "./Game";

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

const game = new Game(screenWidth, screenHeight, canvas);
game.start();

window.addEventListener("keydown", (event: KeyboardEvent) => {
  game.onKeyDown(event);
});

canvas.addEventListener("click", () => {
  game.start();
});
