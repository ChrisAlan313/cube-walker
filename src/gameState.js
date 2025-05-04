class GameState {
  constructor({playerPos = {x: 0, y: 0}, canvasWidth = 8, canvasHeight = 8}) {
    this.playerPos = playerPos;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.needsRender = true;
  }

  wrapLocation() {
    if (this.playerPos.x < 0) {
        this.playerPos.x = this.playerPos.x + this.canvasWidth;
    }
    if (this.playerPos.x >= this.canvasWidth) {
        this.playerPos.x = this.playerPos.x - this.canvasWidth;
    }
    if (this.playerPos.y < 0) {
        this.playerPos.y = this.playerPos.y + this.canvasHeight;
    }
    if (this.playerPos.y >= this.canvasHeight) {
        this.playerPos.y = this.playerPos.y - this.canvasHeight;
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