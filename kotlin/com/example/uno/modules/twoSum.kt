package com.example.uno.modules

class twoSum {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val map = HashMap<Int, Int>()
        for (i in nums.indices) {
            val complement = target - nums[i]
            if (map.containsKey(complement)) {
                return intArrayOf(map[complement]!!, i)
            }
            map[nums[i]] = i
        }
        throw IllegalArgumentException("No two sum solution")       
    },
    fun twoSum2(nums: IntArray, target: Int): IntArray {
        val map = HashMap<Int, Int>()
        nums.forEachIndexed { i, item ->
            val current = map[target - item]
            current?.let {
                return intArrayOf(current, i)
            }
            map[item] = i
        }
        throw IllegalArgumentException("No Solution")
    }
}