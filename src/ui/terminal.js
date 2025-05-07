const CLEAR_SCREEN = "\u001Bc";

export function drawToTerminal(buffer, out, extra = "", options = {}) {
  const output = buffer.map((row) => row.join("")).join("\n");
  if (!options.test) {
    out.write(CLEAR_SCREEN);
  }
  out.write(output + "\n");
  if (extra) out.write(extra + "\n");
}
