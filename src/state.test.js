import State from './state';

describe('State', () => {
  it('should wrap the player position vertically upward', () => {
    const state = new State({ playerPos: { x: 0, y: 7 }, canvasWidth: 8, canvasHeight: 8 });
    state.moveUp();
    expect(state.playerPos).toEqual({ x: 0, y: 0 });
  });
  it('should wrap the player position vertically downward', () => {
    const state = new State({ playerPos: { x: 0, y: 0 }, canvasWidth: 8, canvasHeight: 8 });
    state.moveDown();
    expect(state.playerPos).toEqual({ x: 0, y: 7 });
  });
  it('should wrap the player position horizontally forward', () => {
    const state = new State({ playerPos: { x: 7, y: 0 }, canvasWidth: 8, canvasHeight: 8 });
    state.moveRight();
    expect(state.playerPos).toEqual({ x: 0, y: 0 });
  });
  it('should wrap the player position horizontally backward', () => {
    const state = new State({ playerPos: { x: 0, y: 0 }, canvasWidth: 8, canvasHeight: 8 });
    state.moveLeft();
    expect(state.playerPos).toEqual({ x: 7, y: 0 });
  });
});