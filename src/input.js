import readline from 'node:readline';

const keyMap = {
  up:    'UP',
  down:  'DOWN',
  left:  'LEFT',
  right: 'RIGHT',
  w: 'UP',
  s: 'DOWN',
  a: 'LEFT',
  d: 'RIGHT',
};

export function createInputHandler(onCommand) {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.resume();

  process.stdin.on('keypress', (_, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    }

    const command = keyMap[key.name];
    if (command) onCommand(command);
  });
}