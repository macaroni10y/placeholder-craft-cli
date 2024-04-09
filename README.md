# placeholder-craft-cli
A simple CLI tool to generate placeholder images for your projects.
![image](https://github.com/macaroni10y/placeholder-craft-cli/assets/56068155/2ad43067-822e-4f80-83f2-5355c0a1a02d)


## Installation
Now, you cannot get this package from npm.
You can clone this repository and run the following command to install the dependencies.
```shell
npm ci
```

## Usage
You can run the following command to generate a placeholder image.
```shell
node index.js --width 500 --height 500 --filename hoge.png
```
### Options
- `--width` (required): The width of the image.
- `--height` (required): The height of the image.
- `--filename` : The filename of the image. (default: `placeholder.png`)
- `--bgColor` : The background color of the image. (default: `grey`)
- `--textColor` : The text color of the image. (default: `white`)
