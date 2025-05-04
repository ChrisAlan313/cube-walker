/**
 * remains stateless; renders display given current state
 */

const BACKGROUND = '.';
const PLAYER_CHAR = 'X';

export function drawCanvas(gameState) {
    const width = gameState.canvasWidth;
    const height = gameState.canvasHeight;
    let canvas = '';

    for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
            canvas += gameState.playerPos.x === row && gameState.playerPos.y === column ? PLAYER_CHAR : BACKGROUND;
        }
        canvas += '\n';
    }

    return canvas;
}

let renderCount = 0;

export function render(gameState) {
  // Clear terminal and print current state
  process.stdout.write('\x1Bc');
  process.stdout.write(drawCanvas(gameState));
  console.log(`Current State: ${gameState.playerPos.x}, ${gameState.playerPos.y}. Render count: ${renderCount}`);
  gameState.needsRender = false;
  renderCount++;
}