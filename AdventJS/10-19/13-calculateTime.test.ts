import { describe, expect, it } from "vitest";
import { calculateTime } from "./13-calculateTime";

describe("calculateTime", () => {
	const inputAndExpect: [string[], string][] = [
		[["00:10:00", "01:00:00", "03:30:00"], "-02:20:00"],
		[["02:00:00", "05:00:00", "00:30:00"], "00:30:00"],
		[["00:45:00", "00:45:00", "00:00:30", "00:00:30"], "-05:29:00"],
		[["02:00:00", "03:00:00", "02:00:00"], "00:00:00"],
	];

	// for (const [original, expected] of inputAndExpect) {
	// 	it(`duración de cada entrega ${original}`, () => {
	// 		expect(calculateTime(original)).toEqual(expected);
	// 	});
	// }
	it.each(inputAndExpect)(
		"duración de cada entrega #%#",
		(original, expected) => {
			expect(calculateTime(original)).toEqual(expected);
		},
	);
});
