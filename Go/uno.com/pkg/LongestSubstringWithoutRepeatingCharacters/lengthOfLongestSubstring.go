package LongestSubstringWithoutRepeatingCharacters

func lengthOfLongestSubstring(s string) int {
	var max int
	var start int
	var end int
	var length int
	var charMap = make(map[byte]int)
	for i := 0; i < len(s); i++ {
		charMap[s[i]] = -1
	}
	for end < len(s) {
		if charMap[s[end]] >= start {
			start = charMap[s[end]] + 1
		}
		charMap[s[end]] = end
		length = end - start + 1
		if length > max {
			max = length
		}
		end++
	}
	return max
}