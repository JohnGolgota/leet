<?php
require_once __DIR__ . "./modules/resp/twoSum.php";
$twoSum = new twoSum();
$nums = [2, 7, 11, 15];
$target = 9;
$result = $twoSum->twoSum($nums, $target);
var_dump($result);