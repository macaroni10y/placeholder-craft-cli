# placeholder-craft-cli
A simple CLI tool to generate placeholder images for your projects.

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
