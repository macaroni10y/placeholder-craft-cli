# placeholder-craft-cli
![NPM Downloads](https://img.shields.io/npm/dt/placeholder-craft-cli)
![GitHub License](https://img.shields.io/github/license/macaroni10y/placeholder-craft-cli)
![Author](https://img.shields.io/badge/Author-macaroni10y-pink)

A simple CLI tool to generate placeholder images for your projects.
## example
![placeholder](https://github.com/macaroni10y/placeholder-craft-cli/assets/56068155/b01b477e-1e52-4a35-bd5f-8e6627474d0b)


## Installation
You can install the package globally by running the following command.
```shell
npm install -g placeholder-craft-cli
```

## Usage
You can run the following command to generate a placeholder image.
```shell
phcraft --width 500 --height 500 --filename hoge.png
```
### Options
- `--width` (required): The width of the image.
- `--height` (required): The height of the image.
- `--filename` : The filename of the image. (default: `placeholder.png`)
- `--bgColor` : The background color of the image. (default: `grey`)
- `--textColor` : The text color of the image. (default: `white`)
