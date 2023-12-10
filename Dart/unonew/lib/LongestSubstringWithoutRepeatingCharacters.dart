class LongestSubstringWithoutRepeatingCharacters {
  static int lengthOfLongestSubstring_faild(String s) {
    int n = s.length;
    int ans = 0;
    Map<String, int> map = new Map();
    for (int j = 0, i = 0; j < n; j++) {
      if (map.containsKey(s[j])) {
        i = Math.max(map[s[j]], i);
      }
      ans = Math.max(ans, j - i + 1);
      map[s[j]] = j + 1;
    }
    return ans;
  }
  int lengthOfLongestSubstring(String s) {
    var input = s;
    Set<String> letters = {};
    int maxSubString = 0;
    for (int i = 0; i < input.length; i++) {
      // while (letters.contains(input[i])) {
      //   letters.remove(input[i]);
      // }
      // letters.add(input[i]);
      // if (letters.length > maxSubString) {
      //   maxSubString = letters.length;
      // }
      for (int j = i; j < input.length; j++) {
        if (letters.contains(input[j])) {
          break;
        } else {
          letters.add(input[j]);
        }
      }
      if (letters.length > maxSubString) {
        maxSubString = letters.length;
      }
      letters.clear();
      return maxSubString;
    }
  }
  int lengthOfLongestSubstring2(String s) {
    var input = s;
    Set<String> letters = {};
    int maxSubString = 0;
    for (var i = 0; i < input.length; i++) {

      while (letters.contains(input[i])) {
        letters.remove(letters.first);
      }
      letters.add(input[i]);
      if (letters.length > maxSubString) {
        maxSubString = letters.length;
      }
    }
    return maxSubString;
  }
}