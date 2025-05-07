import TileGrid from './tile-grid.js';

export const DIRECTION = Object.freeze({
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
});
export const DIRECTIONS = Object.freeze(Object.values(DIRECTION));

export const FACE = Object.freeze({
  PX: '+x',
  NX: '-x',
  PY: '+y',
  NY: '-y',
  PZ: '+z',
  NZ: '-z',
});
export const FACES = Object.freeze(Object.values(FACE));

export const ROTATION = Object.freeze({
  R0: 0,
  R90: 90,
  R180: 180,
  R270: 270,
});
export const ROTATIONS = Object.freeze(Object.values(ROTATION));

/**
 * Diagram of the cube world:
                         .---------------------.
                      .'                    .' |
                    .'                    .'   |
                  .'      +y            .'     |
                .'                    .'       |
              .'                    .'         |
              +---------------------+          |
-x      --->  |                    |           | <--- +z
              |                    |           |
              |                    |           |
              |                    |           |
              |         -z         |  +x       |
              |                    |           +
              |                    |         .'
              |                    |       .'
              |                    |     .'
              |                    |   .'
              |                    | .'
              +---------------------+
                       ^
                      -y
 *
 *
 * Simplified diagram:
      +y
       |
 -x — -z — +x — +z
       |
      -y
 *
 * Reference your Rubik's cube by color:
      W
      |
  G — R — B — O
      |
      Y
 *
 * where:
 * - W is white
 * - G is green
 * - R is red
 * - B is blue
 * - O is orange
 * - Y is yellow
 */
class CubeWorld {
  constructor() {
    this.faceMap = {
      '-x': new TileGrid(10, 10), // LEFT side of cube
      '+x': new TileGrid(10, 10), // RIGHT side of cube
      '-y': new TileGrid(10, 10), // BOTTOM of cube
      '+y': new TileGrid(10, 10), // TOP of cube
      '-z': new TileGrid(10, 10), // face towards viewer
      '+z': new TileGrid(10, 10), // face away from viewer
    }
    /**
     * "TOP" will be oriented towards the +z face IF the face is not a z face.
     * If the face is a z face, then "TOP" will be oriented towards the +y face.
     * From "TOP", we can derive the other directions on each face.
     */
    this.edgeMap = {
      [FACE.NX]: {
        'TOP': { face: '+z', edge: 'RIGHT', rotation: 0 },
        'RIGHT': { face: '+y', edge: 'LEFT', rotation: 90 },
        'BOTTOM': { face: '-z', edge: 'LEFT', rotation: 180 },
        'LEFT': { face: '-y', edge: 'RIGHT', rotation: 270 },
      },
      [FACE.PX]: {
        'TOP': { face: '+z', edge: 'LEFT', rotation: 0 },
        'RIGHT': { face: '-y', edge: 'LEFT', rotation: 90 },
        'BOTTOM': { face: '-z', edge: 'RIGHT', rotation: 180 },
        'LEFT': { face: '+y', edge: 'RIGHT', rotation: 270 },
      },
      [FACE.NY]: {
        'TOP': { face: '+z', edge: 'BOTTOM', rotation: 0 },
        'RIGHT': { face: '-x', edge: 'LEFT', rotation: 90 },
        'BOTTOM': { face: '-z', edge: 'BOTTOM', rotation: 180 },
        'LEFT': { face: '+x', edge: 'RIGHT', rotation: 270 },
      },
      [FACE.PY]: {
        'TOP': { face: '+z', edge: 'TOP', rotation: 0 },
        'RIGHT': { face: '+x', edge: 'LEFT', rotation: 90 },
        'BOTTOM': { face: '-z', edge: 'TOP', rotation: 180 },
        'LEFT': { face: '-x', edge: 'RIGHT', rotation: 270 },
      },
      [FACE.NZ]: {
        'TOP': { face: '+y', edge: 'BOTTOM', rotation: 0 },
        'RIGHT': { face: '+x', edge: 'BOTTOM', rotation: 90 },
        'BOTTOM': { face: '-y', edge: 'BOTTOM', rotation: 180 },
        'LEFT': { face: '-x', edge: 'BOTTOM', rotation: 270 },
      },
      [FACE.PZ]: {
        'TOP': { face: '+y', edge: 'TOP', rotation: 0 },
        'RIGHT': { face: '-x', edge: 'TOP', rotation: 90 },
        'BOTTOM': { face: '-y', edge: 'TOP', rotation: 180 },
        'LEFT': { face: '+x', edge: 'TOP', rotation: 270 },
      },
    }
  }
}

export default CubeWorld;