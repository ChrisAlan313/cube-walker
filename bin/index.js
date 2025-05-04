import { createInputHandler } from '../src/input.js';
import { createRenderer } from '../src/ui/index.js';
import { GameEngine } from '../src/engine.js';
import GameState from '../src/state.js';

const gameState = new GameState({ playerPos: { x: 0, y: 0 }, gameWidth: 8, gameHeight: 8 });
const render = createRenderer(process.stdout);
const engine = new GameEngine(gameState, render);

createInputHandler(engine.handleInput.bind(engine));
engine.start();
