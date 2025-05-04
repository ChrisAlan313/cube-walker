import { drawCanvas } from './ui';

describe('drawCanvas', () => {
  it('should draw a canvas with the player in the start position', () => {
    const playerPos = {x: 0, y: 0};
    const canvas = drawCanvas(playerPos);
    expect(canvas).toBe(`xooooooo
oooooooo
oooooooo
oooooooo
oooooooo
oooooooo
oooooooo
oooooooo
`);
  });
});