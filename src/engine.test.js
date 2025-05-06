// figure out why we need to import this
import { jest } from '@jest/globals';
import { GameEngine } from './engine.js';
import State from './state.js';

jest.useFakeTimers()

describe('GameEngine', () => {
  it('updates state and renders on input and next tick', () => {
    const mockRender = jest.fn();
    const state = new State({ playerPos: { x: 1, y: 1 }, gameWidth: 8, gameHeight: 8 });
    const engine = new GameEngine(state, mockRender);

    engine.handleInput('LEFT'); // move left
    expect(state.playerPos).toEqual({ x: 0, y: 1 });
    expect(mockRender).not.toHaveBeenCalled();

    engine.start();
    jest.advanceTimersByTime(34); // ~1 frame at 30fps

    expect(mockRender).toHaveBeenCalledWith(state);
  });
});