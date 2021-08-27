import Game from "./Game";

export default interface Dropable {
  updateFruitDrop(game: Game): void;
  drawImage(): void;
}
