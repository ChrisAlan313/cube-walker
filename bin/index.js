import { createInputHandler } from "../src/input.js";
import { createRenderer } from "../src/ui/index.js";
import { Engine } from "../src/engine.js";
import Player from "../src/state/player.js";
import TileGrid from "../src/state/tile-grid.js";

const grid = new TileGrid(24, 24);
const player = new Player(0, 0);
const render = createRenderer(process.stdout);
const engine = new Engine(grid, player, render);

createInputHandler(engine.handleInput.bind(engine));
engine.start();
