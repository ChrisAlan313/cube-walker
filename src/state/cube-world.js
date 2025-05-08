import TileGrid from "./tile-grid.js";
import { FACE, DIRECTION, ROTATION } from "../constants.js";

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
      [FACE.NX]: new TileGrid(10, 10), // LEFT side of cube
      [FACE.PX]: new TileGrid(10, 10), // RIGHT side of cube
      [FACE.NY]: new TileGrid(10, 10), // BOTTOM of cube
      [FACE.PY]: new TileGrid(10, 10), // TOP of cube
      [FACE.NZ]: new TileGrid(10, 10), // face towards viewer
      [FACE.PZ]: new TileGrid(10, 10), // face away from viewer
    };
    /**
     * "TOP" will be oriented towards the +z face IF the face is not a z face.
     * If the face is a z face, then "TOP" will be oriented towards the +y face.
     * From "TOP", we can derive the other directions on each face.
     */
    this.edgeMap = {
      [FACE.NX]: {
        [DIRECTION.TOP]: {
          face: FACE.PZ,
          edge: DIRECTION.RIGHT,
          rotation: ROTATION.R90,
        },
        [DIRECTION.RIGHT]: {
          face: FACE.PY,
          edge: DIRECTION.LEFT,
          rotation: ROTATION.R0,
        },
        [DIRECTION.BOTTOM]: {
          face: FACE.NZ,
          edge: DIRECTION.LEFT,
          rotation: ROTATION.R90,
        },
        [DIRECTION.LEFT]: {
          face: FACE.NY,
          edge: DIRECTION.RIGHT,
          rotation: ROTATION.R0,
        },
      },
      [FACE.PX]: {
        [DIRECTION.TOP]: {
          face: FACE.PZ,
          edge: DIRECTION.LEFT,
          rotation: ROTATION.R270,
        },
        [DIRECTION.RIGHT]: {
          face: FACE.NY,
          edge: DIRECTION.LEFT,
          rotation: ROTATION.R0,
        },
        [DIRECTION.BOTTOM]: {
          face: FACE.NZ,
          edge: DIRECTION.RIGHT,
          rotation: ROTATION.R270,
        },
        [DIRECTION.LEFT]: {
          face: FACE.PY,
          edge: DIRECTION.RIGHT,
          rotation: ROTATION.R0,
        },
      },
      [FACE.NY]: {
        [DIRECTION.TOP]: {
          face: FACE.PZ,
          edge: DIRECTION.BOTTOM,
          rotation: ROTATION.R0,
        },
        [DIRECTION.RIGHT]: {
          face: FACE.NX,
          edge: DIRECTION.LEFT,
          rotation: ROTATION.R0,
        },
        [DIRECTION.BOTTOM]: {
          face: FACE.NZ,
          edge: DIRECTION.BOTTOM,
          rotation: ROTATION.R180,
        },
        [DIRECTION.LEFT]: {
          face: FACE.PX,
          edge: DIRECTION.RIGHT,
          rotation: ROTATION.R0,
        },
      },
      [FACE.PY]: {
        [DIRECTION.TOP]: {
          face: FACE.PZ,
          edge: DIRECTION.TOP,
          rotation: ROTATION.R180,
        },
        [DIRECTION.RIGHT]: {
          face: FACE.PX,
          edge: DIRECTION.LEFT,
          rotation: ROTATION.R0,
        },
        [DIRECTION.BOTTOM]: {
          face: FACE.NZ,
          edge: DIRECTION.TOP,
          rotation: ROTATION.R0,
        },
        [DIRECTION.LEFT]: {
          face: FACE.NX,
          edge: DIRECTION.RIGHT,
          rotation: ROTATION.R0,
        },
      },
      [FACE.NZ]: {
        [DIRECTION.TOP]: {
          face: FACE.PY,
          edge: DIRECTION.BOTTOM,
          rotation: ROTATION.R0,
        },
        [DIRECTION.RIGHT]: {
          face: FACE.PX,
          edge: DIRECTION.BOTTOM,
          rotation: ROTATION.R90,
        },
        [DIRECTION.BOTTOM]: {
          face: FACE.NY,
          edge: DIRECTION.BOTTOM,
          rotation: ROTATION.R180,
        },
        [DIRECTION.LEFT]: {
          face: FACE.NX,
          edge: DIRECTION.BOTTOM,
          rotation: ROTATION.R270,
        },
      },
      [FACE.PZ]: {
        [DIRECTION.TOP]: {
          face: FACE.PY,
          edge: DIRECTION.TOP,
          rotation: ROTATION.R180,
        },
        [DIRECTION.RIGHT]: {
          face: FACE.NX,
          edge: DIRECTION.TOP,
          rotation: ROTATION.R270,
        },
        [DIRECTION.BOTTOM]: {
          face: FACE.NY,
          edge: DIRECTION.TOP,
          rotation: ROTATION.R0,
        },
        [DIRECTION.LEFT]: {
          face: FACE.PX,
          edge: DIRECTION.TOP,
          rotation: ROTATION.R90,
        },
      },
    };
  }
}

export default CubeWorld;
