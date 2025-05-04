/**
 * glues everything, owns the game loop or render scheduling
 */

export class GameEngine {
  constructor(gameState, renderFn) {
    this.gameState = gameState;
    this.render = renderFn;
    this.dirty = true;
  }

  start() {
    setInterval(() => {
      if (!this.dirty) return;
      this.render(this.gameState);
      this.dirty = false;
    }, 1000 / 30);
  }

  handleInput(command) {
    switch (command) {
      case 'UP':    this.gameState.moveUp(); break;
      case 'DOWN':  this.gameState.moveDown(); break;
      case 'LEFT':  this.gameState.moveLeft(); break;
      case 'RIGHT': this.gameState.moveRight(); break;
      case 'TOGGLE': break; // could add other toggles later
    }
    this.dirty = true;
  }
}