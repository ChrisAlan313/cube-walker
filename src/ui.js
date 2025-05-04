/**
 * remains stateless; renders display given current state
 */

const BACKGROUND = '.';
const PLAYER = 'X';

export function createRenderer(out, options = {}) {
  return function render(gameState) {
    const { canvasWidth: w, canvasHeight: h, playerPos: { x, y } } = gameState;
    if (w === undefined || h === undefined) {
      throw new Error('canvasWidth and canvasHeight are required');
    }

    let result = '';

    // y-axis is inverted because its painted top-to-bottom
    for (let row = h - 1; row >= 0; row--) {
      for (let col = 0; col < w; col++) {
        const isPlayer = (row === y && col === x);
        result += isPlayer ? PLAYER : BACKGROUND;
      }
      result += '\n';
    }

    if (!options.test) {
      out.write('\x1Bc');
    }
    out.write(result);
  };
}