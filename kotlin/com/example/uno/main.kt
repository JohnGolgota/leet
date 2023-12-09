package com.example.uno

import com.example.uno.modules.twoSum

fun main(args: Array<String>) {
    val nums = intArrayOf(2, 7, 11, 15)
    val target = 9
    val result = twoSum().twoSum(nums, target)
    println(result.contentToString())
}