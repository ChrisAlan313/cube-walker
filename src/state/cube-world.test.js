import CubeWorld, { DIRECTION, FACE } from './cube-world';

describe('CubeWorld', () => {
  describe('edgeMap', () => {
    describe('bi-directional edges', () => {
      it('should be symmetric', () => {
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
          const edgeMap = new CubeWorld().edgeMap;
          const {
            departingFace,
            departingDirection,
          } = test;

          // Leaving face of departure over the edge
          const { face, edge } = edgeMap[departingFace][departingDirection];
          // Returning to point of departure over that same edge
          const actual = edgeMap[face][edge];
          // Assert we're back home
          expect(actual.face).toBe(departingFace);
          expect(actual.edge).toBe(departingDirection);
        }
      });
    });
  });
});