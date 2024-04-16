#!/usr/bin/env node

const yargs = require('yargs');
const {createPlaceholderImage} = require("./createPlaceholderImage");

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
    .help()
    .argv;

createPlaceholderImage(argv);
