import { renderBuffer, glyphs } from './buffer.js';

test('player appears in correct position', () => {
  const state = {
    canvasWidth: 3,
    canvasHeight: 2,
    playerPos: { x: 1, y: 1 },
  };

  const buffer = renderBuffer(state);
  expect(buffer).toEqual([
    // x0               x1                 x3
    [glyphs.background, glyphs.player,     glyphs.background], // y 1
    [glyphs.background, glyphs.background, glyphs.background], // y 0
  ]);
});