/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    s = s.split('');
    let max = 0;
    let current = [];
    for (let i = 0; i < s.length; i++) {
        let index = current.indexOf(s[i]);
        if (index > -1) {
            current = current.slice(index + 1);
        }
        current.push(s[i]);
        max = Math.max(max, current.length);
    }
    return max;
}
var lengthOfLongestSubstring2 = function (string) {
    let substring = ''

    const lengths = []

    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        const existing = substring.indexOf(char)

        if (existing !== -1) {
            lengths.push(substring.length)
            substring = substring.slice(existing + 1)
        }

        substring += char
    }

    lengths.push(substring.length)

    return Math.max.apply(null, lengths)
};

export { lengthOfLongestSubstring };

