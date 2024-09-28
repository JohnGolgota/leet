function assertExpectedOutput(output: number, expected: number) {
    return output == expected
}
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let a = 2
    return a
};

const nums1 = [1, 3]
const nums2 = [2]
console.log(
    "test 1",
    assertExpectedOutput(
        findMedianSortedArrays(nums1, nums2),
        2
    )
)

const nums3 = [1,2]
const nums4 = [3,4]
console.log(
    "test 2",
    assertExpectedOutput(
        findMedianSortedArrays(nums3, nums4),
        2.5
    )
)
// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
