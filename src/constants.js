export const DIRECTION = Object.freeze({
  TOP: "TOP",
  BOTTOM: "BOTTOM",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
});
export const DIRECTIONS = Object.freeze(Object.values(DIRECTION));

export const FACE = Object.freeze({
  PX: "+x",
  NX: "-x",
  PY: "+y",
  NY: "-y",
  PZ: "+z",
  NZ: "-z",
});
export const FACES = Object.freeze(Object.values(FACE));

export const ROTATION = Object.freeze({
  R0: 0,
  R90: 90,
  R180: 180,
  R270: 270,
});
export const ROTATIONS = Object.freeze(Object.values(ROTATION));

export const GLYPHS = {
  background: ",'", // looks like grass
  player: "<>", // looks like a player
};