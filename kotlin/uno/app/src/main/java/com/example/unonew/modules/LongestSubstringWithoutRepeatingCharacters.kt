package com.example.unonew.modules

class LongestSubstringWithoutRepeatingCharacters {
    fun lengthOfLongestSubstring(s: String): Int {
        val map = HashMap<Char, Int>()
        var start = 0
        var end = 0
        var max = 0
        while (end < s.length) {
            val current = s[end]
            val index = map[current]
            index?.let {
                start = Math.max(index, start)
            }
            max = Math.max(max, end - start + 1)
            map[current] = end + 1
            end++
        }
        return max
    }
    fun lengthOfLongestSubstring2(s: String): Int {
        val queue = LinkedList<Char>()
        var result = 0
        s.forEach {
            if (queue.contains(it)) {
                result = Math.max(queue.size, result)
                while (queue.pollFirst() != it) {
                    println(it)
                }
                queue.add(it)
            } else {
                queue.add(it)
            }
            result = Math.max(queue.size, result)
        }
        return result
    }
}