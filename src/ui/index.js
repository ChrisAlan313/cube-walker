import { renderFace } from "./buffer.js";
import { drawToTerminal } from "./terminal.js";

export function createRenderer(out, options = {}) {
  return function render(currentFaceGrid, player, rotation) {
    const buffer = renderFace(currentFaceGrid, player, rotation);
    const info = `Current State: ${player.x}, ${player.y}, ${player.face}`;
    drawToTerminal(buffer, out, info, options);
  };
}
