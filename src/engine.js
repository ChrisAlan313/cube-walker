/**
 * glues everything, owns the game loop or render scheduling
 */
export class Engine {
  constructor(grid, player, renderFunction) {
    this.grid = grid;
    this.player = player;
    this.render = renderFunction;
    this.dirty = true;
  }

  start() {
    setInterval(() => {
      if (!this.dirty) return;
      this.render(this.grid, this.player);
      this.dirty = false;
    }, 1000 / 30);
  }

  handleInput(command) {
    switch (command) {
      case "UP": {
        this.player.moveUp();
        break;
      }
      case "DOWN": {
        this.player.moveDown();
        break;
      }
      case "LEFT": {
        this.player.moveLeft();
        break;
      }
      case "RIGHT": {
        this.player.moveRight();
        break;
      }
      case "TOGGLE": {
        break; // could add other toggles later
      }
    }
    this.dirty = true;
  }
}
