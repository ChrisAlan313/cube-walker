export const glyphs = {
  background: ",'", // looks like grass
  player: "<>", // looks like a player
};

/**
 * ephemeral rendering overlay on top of the persistent tile grid
 */
export function renderFace(grid, player) {
  const buffer = [];

  for (let y = grid.height - 1; y >= 0; y--) {
    const row = [];
    for (let x = 0; x < grid.width; x++) {
      if (player.x === x && player.y === y) {
        row.push(glyphs.player);
      } else {
        row.push(grid.get(x, y));
      }
    }
    buffer.push(row);
  }

  return buffer;
}
