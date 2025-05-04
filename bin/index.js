import { main } from '../src/main.js';
import { program } from 'commander';

program
  .option('-w, --width <number>', 'Width of the canvas', 8)
  .option('-h, --height <number>', 'Height of the canvas', 8)
  .parse(process.argv);

const { width, height } = program;

main({ width, height });
