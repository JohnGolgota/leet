package twoSum

func twoSum_slow(nums []int, target int) []int {
    for i, num := range nums {
		for j, num2 := range nums {
			if i != j && num + num2 == target {
				return []int{i, j}
			}
		}
	}
	return []int{}
}

func twoSum(nums []int, target int) []int {
	table := map[int]int{}

	for i, num := range nums {
		if _, ok := table[target-num]; ok {
			return []int{table[target-num], i}
		}

		table[num] = i
	}

	return nil
}