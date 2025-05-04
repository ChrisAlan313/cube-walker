// figure out why we need to import this
import { jest } from '@jest/globals';
import { createRenderer } from './index.js';

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

    // const fullOutput = output.write.mock.calls.map(call => call[0]).join('');
    expect(output.output).toContain('.X.\n...\n');
  });
});