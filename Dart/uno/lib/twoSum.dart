class twoSum {
    List <int> twoSum(List <int> nums, int target) {
        List <int> result = [];
        for (int i = 0; i < nums.length; i++) {
            for (int j = i+1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    result.add(i);
                    result.add(j);
                    return result;
                }
            }
        }
        return result;
    }
    int calculate() {
      // ~/ is integer division
      return 6 * 7 ~/ 2;
    }
    List<int> twoSum(List<int> nums, int target) {
      final map = {};
      for(int i= 0;i < nums.length; i++) {
        final match = target - nums[i];
        if(map.containsKey(match)){
          return [i, map[match]];
        }
        map[nums[i]] = i;
      }
      return [];
    }
}