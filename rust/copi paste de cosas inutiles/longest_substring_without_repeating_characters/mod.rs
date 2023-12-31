impl LongestSubstringWithoutRepeatingCharacters {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut longest = 0;
        let mut current = 0;
        let mut chars: Vec<char> = Vec::new();
        for c in s.chars() {
            if chars.contains(&c) {
                if current > longest {
                    longest = current;
                }
                let index = chars.iter().position(|&x| x == c).unwrap();
                chars = chars[index + 1..].to_vec();
                chars.push(c);
                current = chars.len();
            } else {
                chars.push(c);
                current += 1;
            }
        }
        if current > longest {
            longest = current;
        }
        longest as i32
    }
}