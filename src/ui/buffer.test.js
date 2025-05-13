import { renderFace, stateCoordinates } from "./buffer.js";
import TileGrid from "../state/tile-grid.js";
import { GLYPHS, ROTATION } from "../constants.js";

describe("renderFace", () => {
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
  it("transforms a TileGrid on 90 degrees", () => {
    const player = { x: 1, y: 5 };
    const grid = new TileGrid(2, 6);

    // Original, player at (1, 5)
    // B P
    // B B
    // B B
    // B B
    // B B
    // B B

    // Transformed, player shown at (5, 0)
    // B B B B B B
    // B B B B B P

    const rotatedGrid = renderFace(grid, player, ROTATION.R90);
    expect(rotatedGrid).toEqual([
      [
        GLYPHS.background,
        GLYPHS.background,
        GLYPHS.background,
        GLYPHS.background,
        GLYPHS.background,
        GLYPHS.background,
      ],
      [
        GLYPHS.background,
        GLYPHS.background,
        GLYPHS.background,
        GLYPHS.background,
        GLYPHS.background,
        GLYPHS.player,
      ],
    ]);
  });
  it("transforms a TileGrid on 180 degrees", () => {
    const player = { x: 1, y: 2 };
    const grid = new TileGrid(2, 3);

    // Original
    // B P
    // B B
    // B B

    // Transformed
    // B B
    // B B
    // P B

    const rotatedGrid = renderFace(grid, player, ROTATION.R180);
    expect(rotatedGrid).toEqual([
      [GLYPHS.background, GLYPHS.background],
      [GLYPHS.background, GLYPHS.background],
      [GLYPHS.player, GLYPHS.background],
    ]);
  });
  it("transforms a TileGrid on 270 degrees", () => {
    const player = { x: 1, y: 2 };
    const grid = new TileGrid(2, 3);

    const rotatedGrid = renderFace(grid, player, ROTATION.R270);
    expect(rotatedGrid).toEqual([
      [GLYPHS.player, GLYPHS.background, GLYPHS.background],
      [GLYPHS.background, GLYPHS.background, GLYPHS.background],
    ]);
  });
});

describe("stateCoordinates", () => {
  const testTable = [
    {
      input: {
        displayX: 0,
        displayY: 0,
        displayWidth: 12,
        displayHeight: 6,
        rotation: ROTATION.R0,
      },
      expected: [0, 0],
    },
    {
      input: {
        displayX: 11,
        displayY: 3,
        displayWidth: 12,
        displayHeight: 6,
        rotation: ROTATION.R0,
      },
      expected: [11, 3],
    },
    {
      // Original, player at (1, 5)
      // B P B
      // B B B
      // B B B
      // B B B
      // B B B
      // B B B

      // X is:
      // y[0,1,2] --> x[2,1,0] --> (displayHeight - 1 - displayY) % displayHeight

      // Transformed, player shown at (5, 1)
      // B B B B B B
      // B B B B B P
      // B B B B B B
      input: {
        displayX: 5,
        displayY: 1,
        displayWidth: 6,
        displayHeight: 3,
        rotation: ROTATION.R90,
      },
      expected: [1, 5],
    },
    {
      input: {
        displayX: 0,
        displayY: 2,
        displayWidth: 6,
        displayHeight: 3,
        rotation: ROTATION.R90,
      },
      expected: [0, 0],
    },
    {
      input: {
        displayX: 1,
        displayY: 0,
        displayWidth: 3,
        displayHeight: 6,
        rotation: ROTATION.R180,
      },
      expected: [1, 5],
    },
    {
      input: {
        displayX: 2,
        displayY: 4,
        displayWidth: 3,
        displayHeight: 6,
        rotation: ROTATION.R180,
      },
      expected: [0, 1],
    },
    {
      input: {
        displayX: 0,
        displayY: 1,
        displayWidth: 6,
        displayHeight: 3,
        rotation: ROTATION.R270,
      },
      expected: [1, 5],
    },
    {
      // Original, player at (1, 5)
      // B B B
      // B B B
      // B B B
      // B B P
      // B B B
      // B B B

      // X is:
      // y[0,1,2] --> x[2,1,0] --> (displayHeight - 1 - displayY) % displayHeight

      // Transformed, player shown at (5, 1)
      // B B B P B B
      // B B B B B B
      // B B B B B B
      input: {
        displayX: 3,
        displayY: 2,
        displayWidth: 6,
        displayHeight: 3,
        rotation: ROTATION.R270,
      },
      expected: [2, 2],
    },
  ];

  for (const test of testTable) {
    const { displayX, displayY, displayWidth, displayHeight, rotation } =
      test["input"];
    const expected = test["expected"];

    it(`${rotation} rotation for (${displayX}, ${displayY}) in a ${displayWidth}w by ${displayHeight}h grid`, () => {
      const actual = stateCoordinates(
        displayX,
        displayY,
        displayWidth,
        displayHeight,
        rotation,
      );

      expect(actual).toEqual(expected);
    });
  }
});
