// figure out why we need to import this
import { jest } from '@jest/globals';
import { createRenderer } from './ui.js';

describe('UI Renderer', () => {
  it('draws correct output to stream', () => {
    const output = { write: jest.fn() };
    const render = createRenderer(output, { test: true });

    const mockState = {
      canvasWidth: 3,
      canvasHeight: 2,
      playerPos: { x: 1, y: 1 }
    };

    render(mockState);

    const fullOutput = output.write.mock.calls.map(call => call[0]).join('');
    expect(fullOutput).toContain('.X.\n...\n');
  });
});