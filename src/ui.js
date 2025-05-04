
const BACKGROUND = '.';
const PLAYER_CHAR = 'X';

export function drawCanvas(gameState) {
    const width = gameState.gameWidth;
    const height = gameState.gameHeight;
    let canvas = '';

    for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
            canvas += gameState.playerPos.x === row && gameState.playerPos.y === column ? PLAYER_CHAR : BACKGROUND;
        }
        canvas += '\n';
    }

    return canvas;
}