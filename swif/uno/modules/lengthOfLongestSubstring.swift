import Foundation

class LongestSubstringWithoutRepeatingCharacters {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var longest = 0
        var start = 0
        var end = 0
        var chars = [Character: Int]()
        for (i, c) in s.enumerated() {
            if let index = chars[c] {
                start = max(start, index + 1)
            }
            chars[c] = i
            end = i
            longest = max(longest, end - start + 1)
        }
        return longest
    }
}