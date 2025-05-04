import GameState from '../src/gameState.js';
import { drawCanvas } from '../src/ui.js';
import readline from 'readline'

/**
 * Game state
 */

const gameState = new GameState({playerPos: {x: 0, y: 0}, gameWidth: 8, gameHeight: 8});

/**
 * Input management
 */

// Setup keypress input
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on('keypress', (_, key) => {
  if (key.name === 'space') {
    gameState.toggleState();
  } else if (key.name === 'c' && key.ctrl) {
    process.exit();
  } else if (key.name === 'left') {
    gameState.moveLeft();
    gameState.toggleState();
  } else if (key.name === 'right') {
    gameState.moveRight();
    gameState.toggleState();
  } else if (key.name === 'up') {
    gameState.moveUp();
    gameState.toggleState();
  } else if (key.name === 'down') {
    gameState.moveDown();
    gameState.toggleState();
  }
});

/**
 * UI Render
 */

function render() {
  // Clear terminal and print current state
  process.stdout.write('\x1Bc');
  process.stdout.write(drawCanvas(gameState));
  console.log(`Current State: ${gameState.playerPos.x}, ${gameState.playerPos.y}`);
  gameState.needsRender = false;
}

/**
 * Game loop
 */

// 30fps loop
setInterval(() => {
  if (gameState.needsRender) render();
}, 1000 / 30);
