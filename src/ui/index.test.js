
import { createRenderer } from './index.js';
import TileGrid from '../state/tile-grid.js';
import { glyphs } from './glyphs.js';

class MockOut {
  constructor() {
    this.output = '';
  }

  write(string_) {
    this.output += string_;
  }
}

describe('UI Renderer', () => {
  it('draws correct output to stream', () => {
    const output = new MockOut();
    const render = createRenderer(output, { test: true });
    const grid = new TileGrid(3, 2);
    const player = { x: 1, y: 1 };

    render(grid, player);

    const expected = [
      glyphs.background, glyphs.player, glyphs.background, '\n',
      glyphs.background, glyphs.background, glyphs.background, '\n',
    ].join('');
    expect(output.output).toContain(expected);
  });
});