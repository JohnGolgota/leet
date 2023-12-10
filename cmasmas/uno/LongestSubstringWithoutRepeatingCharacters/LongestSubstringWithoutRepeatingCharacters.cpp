#include "LongestSubstringWithoutRepeatingCharacters.h"

class LongestSubstringWithoutRepeatingCharacters
{
public:
    int lengthOfLongestSubstring(std::string s)
    {
        int max = 0;
        int start = 0;
        int end = 0;
        int len = s.length();
        int i = 0;
        int j = 0;
        int index[256];
        for (i = 0; i < 256; i++)
        {
            index[i] = -1;
        }
        for (i = 0; i < len; i++)
        {
            j = s[i];
            if (index[j] >= start)
            {
                end = i;
                if (end - start > max)
                {
                    max = end - start;
                }
                start = index[j] + 1;
            }
            index[j] = i;
        }
        end = i;
        if (end - start > max)
        {
            max = end - start;
        }
        return max;
    }
};