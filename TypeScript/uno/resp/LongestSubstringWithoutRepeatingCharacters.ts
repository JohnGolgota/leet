function lengthOfLongestSubstring(s: string): number {
    let max = 0;
    let current = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            current = Math.min(i - map.get(s[i]), current + 1);
        } else {
            current++;
        }
        map.set(s[i], i);
        max = Math.max(current, max);
    }
    return max;
}
function lengthOfLongestSubstring2(s: string): number {
    let frontIndex = 0;
    let backIndex = 0;
    let solution = 0;

    const lettersSeen = new Set();

    while (backIndex < s.length) {
        if (lettersSeen.has(s[backIndex])) {
            if (lettersSeen.size > solution) {
                solution = lettersSeen.size;
            }

            while (s[frontIndex] != s[backIndex]) {
                lettersSeen.delete(s[frontIndex]);
                frontIndex += 1;
            }
            frontIndex += 1;
        } else {
            lettersSeen.add(s[backIndex]);
        }

        backIndex += 1;
    }

    if (lettersSeen.size > solution) {
        solution = lettersSeen.size;
    }

    return solution;
};
export { lengthOfLongestSubstring };

