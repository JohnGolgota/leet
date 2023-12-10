import Foundation

class AddTwoNumbers {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var l1 = l1
        var l2 = l2
        var carry = 0
        let dummy = ListNode(0)
        var current: ListNode? = dummy
        while l1 != nil || l2 != nil || carry != 0 {
            let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
            carry = sum / 10
            current?.next = ListNode(sum % 10)
            current = current?.next
            l1 = l1?.next
            l2 = l2?.next
        }
        return dummy.next
    }
    func addTwoNumbers2(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        guard let l1 = l1,
            let l2 = l2 else {
                return ListNode(0)
            }
        
        var answerNode = ListNode()
        addToNode(l1: l1, l2: l2, resultNode: answerNode)
        return answerNode
    }

    func addToNode(
        l1: ListNode,
        l2: ListNode,
        resultNode: ListNode,
        carryOver: Int = 0
    ) {
        let valTotal = l1.val + l2.val + carryOver
        let carryOver = valTotal / 10
        resultNode.val = valTotal % 10

        if l1.next != nil || l2.next != nil || carryOver > 0 {
            let nextNode = ListNode()
            resultNode.next = nextNode
            addToNode(
                l1: l1.next ?? ListNode(),
                l2: l2.next ?? ListNode(),
                resultNode: nextNode,
                carryOver: carryOver
            )
        }
    }
}