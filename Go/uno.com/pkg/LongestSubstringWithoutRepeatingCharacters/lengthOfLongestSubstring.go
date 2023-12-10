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

func lengthOfLongestSubstring2(s string) int {
    left, right := 0, 0
    res := 0
    // pwwkew
    for right < len(s) {
        // check duplicates in [left, right]
        duplicate := -1
        for i := left; i < right; i++ {
            if s[i] == s[right] {
                duplicate = i
            }
        }
        // if there is duplicate - move left = duplicate + 1 
        if duplicate != -1 {
            left = duplicate + 1
        }
        if right - left + 1 > res {
          res = right - left + 1
        }
        right++
    }
    return res
}