
import { createRenderer } from './index.js';
import { glyphs } from './buffer.js';

class MockOut {
  constructor() {
    this.output = '';
  }

  write(str) {
    this.output += str;
  }
}

describe('UI Renderer', () => {
  it('draws correct output to stream', () => {
    const output = new MockOut();
    const render = createRenderer(output, { test: true });

    const mockState = {
      canvasWidth: 3,
      canvasHeight: 2,
      playerPos: { x: 1, y: 1 }
    };

    render(mockState);

    const expected = [
      glyphs.background, glyphs.player, glyphs.background, '\n',
      glyphs.background, glyphs.background, glyphs.background, '\n',
    ].join('');
    expect(output.output).toContain(expected);
  });
});