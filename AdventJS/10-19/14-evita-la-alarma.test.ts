import { describe, expect, it } from "vitest";
import { maxGifts } from "./14-evita-la-alarma";

describe("maxGifts", () => {
	const inputAndExpect: [number[], number][] = [
		[[2, 4, 2], 4],
		[[5, 1, 1, 5], 10],
		[[4, 1, 1, 4, 2, 1], 9],
		[[1, 3, 1, 3, 100], 103],
	];

	it.each(inputAndExpect)(
		"máxima cantidad de regalos que puede entregar #%#",
		(original, expected) => {
			expect(maxGifts(original)).toEqual(expected);
		},
	);
});
