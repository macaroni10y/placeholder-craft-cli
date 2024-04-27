import fs from "node:fs";
import { createCanvas } from "canvas";

export interface PlaceholderImageOptions {
	width: number;
	height: number;
	bgColor?: string;
	textColor?: string;
	filename?: string;
}

export const createPlaceholderImage = ({
	width,
	height,
	bgColor = "grey",
	textColor = "white",
	filename = "placeholder.png",
}: PlaceholderImageOptions): void => {
	if (width <= 0 || height <= 0) {
		throw new Error("Width and height must be greater than 0");
	}
	const canvas = createCanvas(width, height);
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, width, height);
	ctx.fillStyle = textColor;
	const fontSize = Math.min(width, height) / 2;
	ctx.font = `${fontSize}px Arial`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(`${width} * ${height}`, width / 2, height / 2, width - 20);

	const buffer = canvas.toBuffer("image/png");
	fs.writeFileSync(filename, buffer);
};
