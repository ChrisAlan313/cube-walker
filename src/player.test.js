import Player from './player';

describe('Player', () => {
  describe('moveUp', () => {
    it('should move the player position up', () => {
      const player = new Player(0, 0);
      player.moveUp();
      expect(player.y).toEqual(1);
    });
  });
  describe('moveDown', () => {
    it('should move the player position down', () => {
      const player = new Player(0, 1);
      player.moveDown();
      expect(player.y).toEqual(0);
    });
  });
  describe('moveRight', () => {
    it('should move the player position right', () => {
      const player = new Player(0, 0);
      player.moveRight();
      expect(player.x).toEqual(1);
    });
  });
  describe('moveLeft', () => {
    it('should move the player position left', () => {
      const player = new Player(1, 0);
      player.moveLeft();
      expect(player.x).toEqual(0);
    });
  });
});