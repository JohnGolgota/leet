package com.example.unonew.modules

class TwoSum {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val map = HashMap<Int, Int>()
        for ((index, value) in nums.withIndex()) {
            val complement = target - value
            if (map.containsKey(complement)) {
                return intArrayOf(map[complement]!!, index)
            }
            map[value] = index
        }
        throw IllegalArgumentException("No two sum solution")
    }
    fun twoSumTwo(nums: IntArray, target: Int): IntArray {
        val map = HashMap<Int, Int>()
        nums.forEachIndexed { index, item ->
            val current = map[target - item]
            current?.let {
                return intArrayOf(current, index)
            }
            map[item] = index
        }
        throw IllegalArgumentException("No two sum solution")
    }
}