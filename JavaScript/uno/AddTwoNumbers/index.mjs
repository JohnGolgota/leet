
//  Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    let result = new ListNode();
    let current = result;
    let carry = 0;

    while (l1 || l2) {
        let sum = 0;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        sum += carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;

        current.next = new ListNode(sum);
        current = current.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return result.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersRobada = function (l1, l2) {
    let n = l1
    let m = l2
    let carry = 0
    let head = null
    let k = head
    while (m || n || carry > 0) {
        if (m == null) {
            m = new ListNode(0)
        }
        if (n == null) {
            n = new ListNode(0)
        }
        let x = (carry + m.val + n.val) % 10
        carry = Math.floor((carry + m.val + n.val) / 10)
        let node = new ListNode(x)
        if (head == null) {
            head = node
            k = head
        } else {
            k.next = node
            k = k.next
        }
        m = m.next
        n = n.next
    }
    return head
};
export { ListNode, addTwoNumbers };

