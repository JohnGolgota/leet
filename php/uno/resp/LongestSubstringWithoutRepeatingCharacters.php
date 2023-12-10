<?php
class LongestSubstringWithoutRepeatingCharacters {
    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring(string $s): int {
        $max = 0;
        $len = strlen($s);
        $map = [];
        $i = 0;
        $j = 0;
        while ($i < $len && $j < $len) {
            if (!isset($map[$s[$j]])) {
                $map[$s[$j]] = 1;
                $j++;
                $max = max($max, $j - $i);
            } else {
                unset($map[$s[$i]]);
                $i++;
            }
        }
        return $max;
    }
    /**
     * @param String $s
     * @return Integer
     */
    function lengthOfLongestSubstring2(string $s): int {
    $n = strlen($s);
    $charSet = [];  // Using an associative array to simulate a set.
    $ans = 0;
    $l = 0;
    $r = 0;

    while ($r < $n) {
        // If character is not present in the current substring.
        if (!isset($charSet[$s[$r]])) {
            $charSet[$s[$r]] = true;
            $r++;
            $ans = max($ans, $r - $l);
        } 
        // If character is present in the current substring.
        else {
            unset($charSet[$s[$l]]);
            $l++;
        }
    }

    return $ans;
}
}