import { renderFace } from "./buffer.js";
import { drawToTerminal } from "./terminal.js";

export function createRenderer(out, options = {}) {
  return function render(grid, player) {
    const buffer = renderFace(grid, player);
    const info = `Current State: ${player.x}, ${player.y}`;
    drawToTerminal(buffer, out, info, options);
  };
}
