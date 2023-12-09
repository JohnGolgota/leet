/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        let index = nums.indexOf(diff);
        if (index !== -1 && index !== i) {
            return [i, index];
        }
    }
}

const twoSum2 = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(num, i);
    }
}

const twoSum3 = function (nums, target) {
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        if (numIndices.hasOwnProperty(target - nums[i])) {
            return [numIndices[target - nums[i]], i];
        }
        numIndices[nums[i]] = i;
    }
}
export { twoSum, twoSum2, twoSum3 };
export default twoSum;