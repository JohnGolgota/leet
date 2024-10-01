import { getIndexsForPalindrome } from "./11-los-elfos-estudiosos";
import { describe, expect, it } from "vitest";

describe("getIndexsForPalindrome", () => {
  const test: [string, any][] = [
    ['anna', []],
    ['abab', [0, 1]],
    ['abac', null],
    ['aaaaaaaa', []],
    ['aaababa', [1, 3]],
    ['caababa', null],
  ]
  
  for (const [word, expected] of test) {
    it(word, () => {
      expect(getIndexsForPalindrome(word)).toEqual(expected);
    });
  }
});