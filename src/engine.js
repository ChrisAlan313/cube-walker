import { ROTATION } from "./constants.js";

/**
 * glues everything, owns the game loop or render scheduling
 */
export class Engine {
  constructor(cubeWorld, currentFace, player, renderFunction) {
    this.cubeWorld = cubeWorld;
    this.currentFace = currentFace;
    this.player = player;
    this.render = renderFunction;
    this.dirty = true;
    this.rotation = ROTATION.R0;
  }

  rotate(rotation) {
    this.rotation = (this.rotation + rotation) % 360;
  }

  start() {
    setInterval(() => {
      if (!this.dirty) return;
      const currentFaceGrid = this.cubeWorld.faceMap[this.currentFace];
      const currentFaceRotation = this.rotation;
      this.render(currentFaceGrid, this.player, currentFaceRotation);
      this.dirty = false;
    }, 1000 / 30);
  }

  handleInput(command) {
    switch (command) {
      case "UP": {
        this.player.moveUp();
        break;
      }
      case "DOWN": {
        this.player.moveDown();
        break;
      }
      case "LEFT": {
        this.player.moveLeft();
        break;
      }
      case "RIGHT": {
        this.player.moveRight();
        break;
      }
      case "TOGGLE": {
        break; // could add other toggles later
      }
    }
    this.dirty = true;
  }
}
