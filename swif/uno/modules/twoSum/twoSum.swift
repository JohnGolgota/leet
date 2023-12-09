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