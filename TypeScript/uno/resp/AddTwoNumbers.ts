class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next
    }
}

function addTwoNumbers(l1: ListNode | null | undefined, l2: ListNode | null | undefined): ListNode | null {
    let result = new ListNode();
    let current = result;
    let carry = 0;
    while (l1 || l2) {
        let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry) {
        current.next = new ListNode(carry);
    }
    return result.next;
}

export { ListNode, addTwoNumbers };

