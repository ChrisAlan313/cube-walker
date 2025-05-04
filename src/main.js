import GameState from './gameState.js';
import { render } from './ui.js';
import { handleInput } from './input.js';

/**
 * bootstraps system: wires input → game → render
 */

export function main({ width, height }) {
  const gameState = new GameState({
    playerPos: { x: 0, y: 0 },
    canvasWidth: width,
    canvasHeight: height
  });
  handleInput(gameState);
  render(gameState);
  setInterval(() => {
    if (gameState.needsRender) render(gameState);
  }, 1000 / 30);
}