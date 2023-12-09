function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        let idx = nums.indexOf(diff);
        if (idx !== -1 && idx !== i) {
            return [i, idx];
        }
    }
    return [];
}
// function twoSum2(nums: number[], target: number): number[] {
//     const seen = new Map()
//     seen[nums[0]] = 0
//     let i = 1
//     while (i < nums.length) {
//         const remainder = target - nums[i]
//         if (remainder in seen) {
//             return [i, seen[remainder]]
//         }
//         seen[nums[i]] = i
//         i++
//     }
//     return []
// };
export { twoSum };

