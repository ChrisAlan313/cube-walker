class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveUp() {
    this.y += 1;
  }

  moveDown() {
    this.y -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  moveLeft() {
    this.x -= 1;
  }
}

export default Player;
