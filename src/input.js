import readline from 'readline'

/**
 * low-level key event binding and semantic event dispatching
 */

export const handleInput = (gameState) => {
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
}
