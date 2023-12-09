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