import Game from "./Game";

export default interface Dropable {
  updateImageDrop(game: Game): void;
  drawImage(): void;
}
