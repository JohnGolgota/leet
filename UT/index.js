function SmallestMissingPositive(nums) {
	if (nums.length === 0) {
		return 0;
	}

	const onlyPositive = nums.filter(num => num > 0);

	const set = new Set(onlyPositive);
	for (let i = 0; i < nums.length; i++) {
		if (!set.has(nums[i])) {
			return i + 1;
		}
	}
}
