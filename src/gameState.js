class GameState {
  constructor({playerPos = {x: 0, y: 0}, gameWidth = 8, gameHeight = 8}) {
    this.playerPos = playerPos;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.needsRender = true;
  }

  wrapLocation() {
    if (this.playerPos.x < 0) {
        this.playerPos.x = this.playerPos.x + this.gameWidth;
    }
    if (this.playerPos.x >= this.gameWidth) {
        this.playerPos.x = this.playerPos.x - this.gameWidth;
    }
    if (this.playerPos.y < 0) {
        this.playerPos.y = this.playerPos.y + this.gameHeight;
    }
    if (this.playerPos.y >= this.gameHeight) {
        this.playerPos.y = this.playerPos.y - this.gameHeight;
    }
  };

  moveLeft() {
    this.playerPos.y -= 1;
  }

  moveDown() {
    this.playerPos.x += 1;
  }

  moveRight() {
    this.playerPos.y += 1;
  }

  moveUp() {
    this.playerPos.x -= 1;
  }

  toggleState() {
    this.wrapLocation();
    this.needsRender = true;
  }
}

export default GameState;