import { createInputHandler } from "../src/input.js";
import { createRenderer } from "../src/ui/index.js";
import { Engine } from "../src/engine.js";
import Player from "../src/state/player.js";
import CubeWorld from "../src/state/cube-world.js";
import { FACE } from "../src/constants.js";

const world = new CubeWorld(10);
const firstFace = FACE.NZ;
const player = new Player(0, 0, firstFace);
const renderer = createRenderer(process.stdout);
const engine = new Engine(world, firstFace, player, renderer);

createInputHandler(engine.handleInput.bind(engine));
engine.start();
