export const glyphs = {
  background: ",'", // looks like grass
  player: '<>', // looks like a player
};

export function renderBuffer(gameState) {
  const { canvasWidth: w, canvasHeight: h, playerPos: { x, y } } = gameState;
  const buffer = [];

  for (let row = h - 1; row >= 0; row--) {
    const line = [];
    for (let col = 0; col < w; col++) {
      line.push(row === y && col === x ? glyphs.player : glyphs.background);
    }
    buffer.push(line);
  }

  return buffer;
}