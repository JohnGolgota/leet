<?php
require_once "./resp/twoSum.php";
$twoSum = new TwoSum();
$nums = [2, 7, 11, 15];
$target = 9;
$result = $twoSum->twoSum($nums, $target);
var_dump($result);