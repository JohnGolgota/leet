namespace Csharp.LongestSubstringWithoutRepeatingCharacters
{
    public class LongestSubstringWithoutRepeatingCharacters
    {
        public int LengthOfLongestSubstring(string s)
        {
            int n = s.Length;
            int ans = 0;
            Dictionary<char, int> map = new Dictionary<char, int>();
            for (int j = 0, i = 0; j < n; j++)
            {
                if (map.ContainsKey(s[j]))
                {
                    i = Math.Max(map[s[j]], i);
                }
                ans = Math.Max(ans, j - i + 1);
                map[s[j]] = j + 1;
            }
            return ans;
        }
        public int LengthOfLongestSubstring2(string s)
        {
            HashSet<char> set = new();
            int res = 0;
            int left = 0, right = 0;

            while (right < s.Length)
            {
                while (set.Contains(s[right]))
                {
                    set.Remove(s[left]);
                    left++;
                }

                set.Add(s[right]);
                res = Math.Max(res, right - left + 1);
                right++;
            }

            return res;
        }

    }
}