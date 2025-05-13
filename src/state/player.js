class Player {
  constructor(x, y, face) {
    this.x = x;
    this.y = y;
    this.face = face;
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
