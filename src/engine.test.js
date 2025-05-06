// figure out why we need to import this
import { jest } from '@jest/globals';
import { Engine } from './engine.js';
import Player from './state/player.js';
import TileGrid from './state/tile-grid.js';

jest.useFakeTimers()

describe('Engine', () => {
  it('updates state and renders on input and next tick', () => {
    const mockRender = jest.fn();
    const grid = new TileGrid(8, 8);
    const player = new Player(1, 1);
    const engine = new Engine(grid, player, mockRender);

    engine.handleInput('LEFT'); // move left
    expect(player.x).toEqual(0);
    expect(mockRender).not.toHaveBeenCalled();

    engine.start();
    jest.advanceTimersByTime(34); // ~1 frame at 30fps

    expect(mockRender).toHaveBeenCalledWith(grid, player);
  });
});