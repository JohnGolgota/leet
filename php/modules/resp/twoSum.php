<?php
class twoSum {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum(array $nums, Int $target): array {
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