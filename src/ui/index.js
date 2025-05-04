import { renderBuffer } from './buffer.js';
import { drawToTerminal } from './terminal.js';

export function createRenderer(out, options = {}) {
  return function render(gameState) {
    const buffer = renderBuffer(gameState);
    const info = `Current State: ${gameState.playerPos.x}, ${gameState.playerPos.y}`;
    drawToTerminal(buffer, out, info, options);
  };
}