import { GLYPHS, ROTATION } from "../constants.js";

/**
 * ephemeral rendering overlay on top of the persistent tile grid
 */
export function renderFace(grid, player, rotation = ROTATION.R0) {
  const displayHeight =
    rotation === ROTATION.R90 || rotation === ROTATION.R270
      ? grid.width
      : grid.height;
  const displayWidth =
    rotation === ROTATION.R90 || rotation === ROTATION.R270
      ? grid.height
      : grid.width;
  const buffer = [];

  // We descend the display's Y because we paint from top down.
  for (let displayY = displayHeight - 1; displayY >= 0; displayY--) {
    // We build each row of display data
    const displayRow = [];
    for (let displayX = 0; displayX < displayWidth; displayX++) {
      // From our position in the DISPLAY grid that we're painting (NOT THE ACTUAL GRID!!!!),
      // find the corresponding position in the un-rotated grid in state.
      const [stateX, stateY] = stateCoordinates(
        displayX,
        displayY,
        displayWidth,
        displayHeight,
        rotation,
      );
      // Compare player's stateful location to the stateful location of this display cell.
      if (stateX === player.x && stateY === player.y) {
        displayRow.push(GLYPHS.player);
      } else {
        displayRow.push(grid.get(stateX, stateY));
      }
    }
    // With each line of text output, we push that line to the buffer.
    buffer.push(displayRow);
  }

  return buffer;
}

/**
 * Say you passed in:
  // x0 x1
  // B  P y2
  // B  B y1
  // B  B y0
 *
 * Player position in rotation is: projectCoordinates(x1, y2, 2, 3, R90)
 * returns [2, 0]
 *
 * first call to projectCoordinates(x0, y2, 2, 3, R90)
 * returns [2, 1]
 * second call to projectCoordinates(x1, y2, 2, 3, R90)
 * returns [2, 0]
 */
// export function projectCoordinates(x, y, width, height, rotation) {
//   switch (rotation) {
//     case ROTATION.R0: {
//       return [x, y];
//     }
//     case ROTATION.R90: {
//       return [y, x - 1];
//     }
//     case ROTATION.R180: {
//       return [width - 1 - x, height - 1 - y];
//     }
//     case ROTATION.R270: {
//       return [(width + 1 + y) % width, x];
//     }
//     default: {
//       throw new Error("Invalid rotation.");
//     }
//   }
// }

/**
 * This takes information about the display and then works back to where the
 * corresponding cell is in the TileGrid state. I'm verbose with the display
 * here because it's been painful to wrap my head around this and I'll need a
 * reminder at the end of the week.
 */
export function stateCoordinates(
  displayX,
  displayY,
  displayWidth,
  displayHeight,
  rotation,
) {
  switch (rotation) {
    case ROTATION.R0: {
      return [displayX, displayY];
    }
    case ROTATION.R90: {
      return [invertPosition(displayY, displayHeight), displayX];
    }
    case ROTATION.R180: {
      return [
        invertPosition(displayX, displayWidth),
        invertPosition(displayY, displayHeight),
      ];
    }
    case ROTATION.R270: {
      return [displayY, invertPosition(displayX, displayWidth)];
    }
    default: {
      throw new Error("Invalid rotation.");
    }
  }
}

function invertPosition(position, length) {
  return (length - 1 - position) % length;
}
