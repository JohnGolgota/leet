import { describe, expect, it } from "vitest";
import { autonomousDrive } from "./15-robot-autonomo";

describe("autonomousDrive", () => {
	const inputAndExpect: [[string[], string[]], string[]][] = [
		[
			[
				["..!....", "...*.*."],
				["R", "R", "D", "L"],
			],
			[".......", "...*!*."],
		],
		[
			[
				[".**.*.*.", ".***....", "..!....."],
				["D", "U", "R", "R", "R"],
			],
			[".**.*.*.", ".***....", ".....!.."],
		],
	];

	it("type check", () => {
		const store: string[] = ["..!....", "...*.*."];
		const movements: string[] = ["R", "R", "D", "L"];
		expect(autonomousDrive(store, movements)).toBeInstanceOf(Array);
	});

	it.each(inputAndExpect)("autonomousDrive #%#", (original, expected) => {
		expect(autonomousDrive(original[0], original[1])).toEqual(expected);
	});
});
