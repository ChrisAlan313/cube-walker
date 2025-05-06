import { renderFace, glyphs } from './buffer.js';
import TileGrid from './tile-grid.js';

test('player appears in correct position', () => {
  const grid = new TileGrid(3, 2);
  const player = { x: 1, y: 1 };

  const buffer = renderFace(grid, player);
  expect(buffer).toEqual([
    // x0               x1                 x3
    [glyphs.background, glyphs.player,     glyphs.background], // y 1
    [glyphs.background, glyphs.background, glyphs.background], // y 0
  ]);
});