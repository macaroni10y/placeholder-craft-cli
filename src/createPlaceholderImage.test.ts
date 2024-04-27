import fs from "node:fs";
import { createPlaceholderImage } from "./createPlaceholderImage";

jest.mock("node:fs", () => ({
	writeFileSync: jest.fn(),
}));

describe("createPlaceholderImage function", () => {
	beforeEach(() => {
		(fs.writeFileSync as jest.Mock).mockClear();
	});
	it("should create an image with specified dimensions and colors", () => {
		createPlaceholderImage({
			width: 100,
			height: 50,
			bgColor: "blue",
			textColor: "white",
			filename: "test.png",
		});
		expect(fs.writeFileSync).toHaveBeenCalledWith(
			"test.png",
			expect.any(Buffer),
		);
	});
	it("should create an image with default names if not specified", () => {
		createPlaceholderImage({ width: 100, height: 50 });
		expect(fs.writeFileSync).toHaveBeenCalledWith(
			"placeholder.png",
			expect.any(Buffer),
		);
	});
	it("should throw an error if width or height is less than or equal to 0", () => {
		expect(() => createPlaceholderImage({ width: 0, height: 100 })).toThrow(
			"Width and height must be greater than 0",
		);
		expect(() => createPlaceholderImage({ width: 100, height: 0 })).toThrow(
			"Width and height must be greater than 0",
		);
		expect(() => createPlaceholderImage({ width: -1, height: 100 })).toThrow(
			"Width and height must be greater than 0",
		);
		expect(() => createPlaceholderImage({ width: 100, height: -1 })).toThrow(
			"Width and height must be greater than 0",
		);
	});
});
