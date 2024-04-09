#!/usr/bin/env node

const { createCanvas } = require('canvas');
const fs = require('fs');
const yargs = require('yargs');

const argv = yargs
    .option('width', {
      alias: 'w',
      describe: 'The width of the image',
      type: 'number',
      demandOption: true,
    })
    .option('height', {
      alias: 'h',
      describe: 'The height of the image',
      type: 'number',
      demandOption: true,
    })
    .option('bgColor', {
      alias: 'b',
      describe: 'Background color',
      type: 'string',
      default: 'grey',
    })
    .option('textColor', {
      alias: 't',
      describe: 'Text color',
      type: 'string',
      default: 'white',
    })
    .option('filename', {
      alias: 'f',
      describe: 'The output filename',
      type: 'string',
      default: 'placeholder.png',
    })
    .argv;

function createPlaceholderImage(width, height, bgColor, textColor, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = textColor;
  const fontSize = Math.min(width, height) / 2;
  ctx.font = `${fontSize}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${width} * ${height}`, width / 2, height / 2, width - 20);

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
}

createPlaceholderImage(argv.width, argv.height, argv.bgColor, argv.textColor, argv.filename);
