import { describe, expect, it } from "vitest";
import { checkIsValidCopy } from "./12-checkIsValidCopy";

describe("checkIsValidCopy", () => {
	const inputAndExpect: [string, string, boolean][] = [
		["Santa Claus is coming", "sa#ta Cl#us i+ comin#", true],
		["s#nta Cla#s is coming", "p#nt: cla#s #s c+min#", false],
		["Santa Claus", "s#+:. c:. s", true],
		["Santa Claus", "s#+:.#c:. s", false],
		["s+#:.#c:. s", "s#+:.#c:. s", false],
	];
	for (const [original, copy, expected] of inputAndExpect) {
		it(`${original} and ${copy}`, () => {
			expect(checkIsValidCopy(original, copy)).toEqual(expected);
		});
	}
});
