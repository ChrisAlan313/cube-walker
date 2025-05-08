import CubeWorld from "./cube-world";
import { DIRECTION, FACE } from "../constants";

// helper function to update running rotation
function updateRunningRotation(runningRotation, rotation) {
  runningRotation += rotation;
  runningRotation %= 360;
  return runningRotation;
}

describe("CubeWorld", () => {
  describe("edgeMap", () => {
    describe("bi-directional edges", () => {
      const tableTests = [
        { departingFace: FACE.NX, departingDirection: DIRECTION.TOP },
        { departingFace: FACE.NX, departingDirection: DIRECTION.RIGHT },
        { departingFace: FACE.NX, departingDirection: DIRECTION.BOTTOM },
        { departingFace: FACE.NX, departingDirection: DIRECTION.LEFT },
        { departingFace: FACE.PX, departingDirection: DIRECTION.TOP },
        { departingFace: FACE.PX, departingDirection: DIRECTION.RIGHT },
        { departingFace: FACE.PX, departingDirection: DIRECTION.BOTTOM },
        { departingFace: FACE.PX, departingDirection: DIRECTION.LEFT },
        { departingFace: FACE.NY, departingDirection: DIRECTION.TOP },
        { departingFace: FACE.NY, departingDirection: DIRECTION.RIGHT },
        { departingFace: FACE.NY, departingDirection: DIRECTION.BOTTOM },
        { departingFace: FACE.NY, departingDirection: DIRECTION.LEFT },
        { departingFace: FACE.PY, departingDirection: DIRECTION.TOP },
        { departingFace: FACE.PY, departingDirection: DIRECTION.RIGHT },
        { departingFace: FACE.PY, departingDirection: DIRECTION.BOTTOM },
        { departingFace: FACE.PY, departingDirection: DIRECTION.LEFT },
        { departingFace: FACE.NZ, departingDirection: DIRECTION.TOP },
        { departingFace: FACE.NZ, departingDirection: DIRECTION.RIGHT },
        { departingFace: FACE.NZ, departingDirection: DIRECTION.BOTTOM },
        { departingFace: FACE.NZ, departingDirection: DIRECTION.LEFT },
        { departingFace: FACE.PZ, departingDirection: DIRECTION.TOP },
        { departingFace: FACE.PZ, departingDirection: DIRECTION.RIGHT },
        { departingFace: FACE.PZ, departingDirection: DIRECTION.BOTTOM },
        { departingFace: FACE.PZ, departingDirection: DIRECTION.LEFT },
      ];

      for (const test of tableTests) {
        it(`should be symmetric, ${test.departingFace} ${test.departingDirection}`, () => {
          const edgeMap = new CubeWorld().edgeMap;
          const { departingFace, departingDirection } = test;
          let runningRotation = 0;

          // Leaving face of departure over the edge
          const { face, edge, rotation } =
            edgeMap[departingFace][departingDirection];
          runningRotation = updateRunningRotation(runningRotation, rotation);
          // Returning to point of departure over that same edge
          const actual = edgeMap[face][edge];
          runningRotation = updateRunningRotation(
            runningRotation,
            actual.rotation,
          );
          // Assert we're back home
          expect(actual.face).toBe(departingFace);
          expect(actual.edge).toBe(departingDirection);
          expect(runningRotation).toBe(0);
        });
      }
    });
  });
});
