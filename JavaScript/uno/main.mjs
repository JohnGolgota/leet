// import { twoSum3 } from "./TwoSum/index.mjs";

// let result = twoSum3([2, 7, 11, 15], 9); // [0, 1]

// console.log(result);
import { ListNode, addTwoNumbers } from "./AddTwoNumbers/index.mjs";

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(l1, l2); // [7, 0, 8]

console.log(result);