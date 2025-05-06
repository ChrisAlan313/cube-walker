export const glyphs = {
  background: ",'", // looks like grass
  player: '<>', // looks like a player
};

/**
 * TileGrid is a face-local, mutable, persistent grid. This is is not
 * responsible for rendering the player glyph. That is part of rendering logic,
 * not game state. The visual buffer will be derived from this grid at render time.
 */
class TileGrid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => glyphs.background)
    );
  }

  get(x, y) {
    return this.cells[y][x];
  }

  set(x, y, value) {
    this.cells[y][x] = value;
  }
}

export default TileGrid;