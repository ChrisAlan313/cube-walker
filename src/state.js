class State {
  constructor({playerPos = {x: 0, y: 0}, canvasWidth = 8, canvasHeight = 8}) {
    this.playerPos = playerPos;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.needsRender = true;
  }

  moveUp() {
    this.playerPos.y += 1;
    if (this.playerPos.y >= this.canvasHeight) {
      this.playerPos.y = 0;
    }
  }

  moveDown() {
    this.playerPos.y -= 1;
    if (this.playerPos.y < 0) {
      this.playerPos.y = this.canvasHeight - 1;
    }
  }

  moveRight() {
    this.playerPos.x += 1;
    if (this.playerPos.x >= this.canvasWidth) {
      this.playerPos.x = 0;
    }
  }

  moveLeft() {
    this.playerPos.x -= 1;
    if (this.playerPos.x < 0) {
      this.playerPos.x = this.canvasWidth - 1;
    }
  }
}

export default State;