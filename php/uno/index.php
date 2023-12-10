<?php
require_once 'resp/AddTwoNumbers.php';

$l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
$l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
$resp = (new AddTwoNumbers())->addTwoNumbers($l1, $l2);
var_dump($resp);