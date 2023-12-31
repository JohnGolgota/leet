import Foundation

class TwoSum {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var dict = [Int: Int]()
        for (index, num) in nums.enumerated() {
            if let lastIndex = dict[target - num] {
                return [lastIndex, index]
            }
            dict[num] = index
        }
        return []
    }
    func twoSum2(_ nums: [Int], _ target: Int) -> [Int] {
        var dict: [Int:Int] = [:]
        for (index, value) in nums.enumerated() {
            if let a = dict[value] {
                return [a, index]
            } else {
                dict[target - value] = index
            }
        }
        return []
    }
}

// Uso

// let twoSum = TwoSum()
// let nums = [2, 7, 11, 15]
// let target = 9
// let result = twoSum.twoSum(nums, target)
// print(result)