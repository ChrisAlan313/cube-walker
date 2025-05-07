import CubeWorld from './cube-world';

describe('CubeWorld', () => {
  describe('edgeMap', () => {
    describe('bidirectional edges', () => {
      it('should be symmetric', () => {
        const tableTests = [{
          departingFace: '-x',
          departingDirection: 'TOP',
          returningFace: '',
          returningDirection: ''
        }];

        for (const test of tableTests) {
          const edgeMap = new CubeWorld().edgeMap;
          
        }
      });
    });
  });
});