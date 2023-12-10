<?php
class TwoSum {

    /**
     * @param int[] $nums
     * @param int $target
     * @return int[]
     */
    function twoSum(array $nums, int $target): array {
        $map = [];
        foreach ($nums as $key => $value) {
            $map[$value] = $key;
        }
        foreach ($nums as $key => $value) {
            $diff = $target - $value;
            if (isset($map[$diff]) && $map[$diff] != $key) {
                return [$key, $map[$diff]];
            }
        }
        return [];
    }
}
// require_once "./resp/twoSum.php";
// $twoSum = new TwoSum();
// $nums = [2, 7, 11, 15];
// $target = 9;
// $result = $twoSum->twoSum($nums, $target);
// var_dump($result);