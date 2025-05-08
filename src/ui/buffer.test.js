import { renderFace } from "./buffer.js";
import TileGrid from "../state/tile-grid.js";
import { GLYPHS, ROTATION } from "../constants.js";

describe('renderFace', () => {
  it("shows player in correct position", () => {
    const grid = new TileGrid(3, 2);
    const player = { x: 1, y: 1 };
    
    const buffer = renderFace(grid, player);
    expect(buffer).toEqual([
      // x0               x1                 x3
      [GLYPHS.background, GLYPHS.player, GLYPHS.background], // y 1
      [GLYPHS.background, GLYPHS.background, GLYPHS.background], // y 0
    ]);
  });
  it('transforms a TileGrid on 90 degrees', () => {
    const player = {x: 1,y: 2}
    const grid = new TileGrid(2, 3);

    // Original
    // B P
    // B B
    // B B

    // Transformed
    // B B B
    // B B P

    const rotatedGrid = renderFace(grid, player, ROTATION.R90)
    expect(rotatedGrid).toEqual([
      [GLYPHS.background, GLYPHS.background, GLYPHS.background],
      [GLYPHS.background, GLYPHS.background, GLYPHS.player ],
    ])
  })
  it('transforms a TileGrid on 180 degrees', () => {
    const player = {x: 1,y: 2}
    const grid = new TileGrid(2, 3);

    // Original
    // B P
    // B B
    // B B

    // Transformed
    // B B
    // B B
    // P B

    const rotatedGrid = renderFace(grid, player, ROTATION.R180)
    expect(rotatedGrid).toEqual([
      [GLYPHS.background, GLYPHS.background],
      [GLYPHS.background, GLYPHS.background ],
      [GLYPHS.player, GLYPHS.background]
    ])
  })
});