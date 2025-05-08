import TileGrid from "./tile-grid.js";
import { GLYPHS } from "../constants.js";

test("player appears in correct position", () => {
  const tileGrid = new TileGrid(3, 2);
  expect(tileGrid.cells).toEqual([
    // x0               x1                 x3
    [GLYPHS.background, GLYPHS.background, GLYPHS.background], // y 1
    [GLYPHS.background, GLYPHS.background, GLYPHS.background], // y 0
  ]);
});
