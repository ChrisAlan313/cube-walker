import GameState from './gameState';

describe('GameState', () => {
    describe('moveLeft', () => {
        it('should move the player left', () => {
            const gameState = new GameState({playerPos: {x: 0, y: 0}, canvasWidth: 1, canvasHeight: 1});
            gameState.moveLeft();
            expect(gameState.playerPos.y).toBe(-1);
        });
    });

    describe('moveDown', () => {
        it('should move the player down', () => {
            const gameState = new GameState({playerPos: {x: 0, y: 0}, canvasWidth: 1, canvasHeight: 1});
            gameState.moveDown();
            expect(gameState.playerPos.x).toBe(1);
        });
    });

    describe('moveRight', () => {
        it('should move the player right', () => {
            const gameState = new GameState({playerPos: {x: 0, y: 0}, canvasWidth: 1, canvasHeight: 1});
            gameState.moveRight();
            expect(gameState.playerPos.y).toBe(1);
        });
    });

    describe('moveUp', () => {
        it('should move the player up', () => {
            const gameState = new GameState({playerPos: {x: 0, y: 0}, canvasWidth: 1, canvasHeight: 1});
            gameState.moveUp();
            expect(gameState.playerPos.x).toBe(-1);
        });
    });

    describe('wrapLocation', () => {
        it('should wrap the player location horizontally', () => {
            const gameState = new GameState({playerPos: {x: 0, y: 0}, canvasWidth: 4, canvasHeight: 4});
            gameState.moveUp();
            gameState.wrapLocation();
            expect(gameState.playerPos.x).toBe(3);
        });
        it('should wrap the player location horizontally backwards', () => {
            const gameState = new GameState({playerPos: {x: 3, y: 0}, canvasWidth: 4, canvasHeight: 4});
            gameState.moveDown();
            gameState.wrapLocation();
            expect(gameState.playerPos.x).toBe(0);
        });
        it('should wrap the player location vertically', () => {
            const gameState = new GameState({playerPos: {x: 0, y: 0}, canvasWidth: 4, canvasHeight: 4});
            gameState.moveLeft();
            gameState.wrapLocation();
            expect(gameState.playerPos.y).toBe(3);
        });
        it('should wrap the player location vertically backwards', () => {
            const gameState = new GameState({playerPos: {x: 0, y: 3}, canvasWidth: 4, canvasHeight: 4});
            gameState.moveRight();
            gameState.wrapLocation();
            expect(gameState.playerPos.y).toBe(0);
        });
    });
});