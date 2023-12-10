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

function addTwoNumbers2(l1: ListNode | null | undefined, l2: ListNode | null | undefined): ListNode | null {
    const head = new ListNode(0)
    let tail = head
    let reminder = 0 as number
    while (l1 !== null || l2 !== null) {
        let s1 = 0, s2 = 0;
        if (l1) {
            s1 = l1.val
            l1 = l1.next
        }
        if (l2) {
            s2 = l2.val
            l2 = l2.next
        }

        const sum = s2 + s1 + reminder
        const newNode = new ListNode(sum % 10)
        tail.next = newNode
        tail = tail.next
        if (sum >= 10) {
            reminder = 1
        } else {
            reminder = 0
        }
    }
    if (reminder === 1) {
        tail.next = new ListNode(1)
    }
    return head.next
}

export { ListNode, addTwoNumbers };

