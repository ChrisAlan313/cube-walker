import { GLYPHS, ROTATION } from "../constants";

/**
 * ephemeral rendering overlay on top of the persistent tile grid
 */
export function renderFace(grid, player, rotation = ROTATION.R0) {
  const buffer = [];

  if (rotation === ROTATION.R0) {
    // vertically descending y
    // horizontally ascending x
    for (let y = grid.height - 1; y >= 0; y--) {
      const row = [];
      for (let x = 0; x < grid.width; x++) {
        if (player.x === x && player.y === y) {
          row.push(GLYPHS.player);
        } else {
          row.push(grid.get(x, y));
        }
      }
      buffer.push(row);
    }
  } else if (rotation === ROTATION.R90) {
    // vertically ascending x
    // horizontally ascending y
    for (let x = 0; x < grid.width; x++) {
      const row = [];
      for (let y = 0; y < grid.height; y++) {
        if (player.x === x && player.y === y) {
          row.push(GLYPHS.player);
        } else {
          row.push(grid.get(x, y));
        }
      }
      buffer.push(row)
    }
  } else if (rotation === ROTATION.R180) {
    // vertically ascending y
    // horizontally descending x
    for (let y = 0; y < grid.height; y++) {
      const row = [];
      for (let x = grid.width - 1; x >= 0; x--) {
        if (player.x === x && player.y === y) {
          row.push(GLYPHS.player);
        } else {
          row.push(grid.get(x, y))
        }
      }
      buffer.push(row)
    }
  }

  return buffer;
}
