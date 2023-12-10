package com.example.unonew.modules.AddTwoNumbers

import com.example.unonew.modules.AddTwoNumbers.ListNode

class AddTwoNumbers {
    fun addTwoNumbers(l1:ListNode?,l2:ListNode?):ListNode?{
        val dummyHead = ListNode(0)
        var p = l1
        var q = l2
        var curr = dummyHead
        var carry = 0
        while (p != null || q != null) {
            val x = p?.`val` ?: 0
            val y = q?.`val` ?: 0
            val sum = carry + x + y
            carry = sum / 10
            curr.next = ListNode(sum % 10)
            curr = curr.next!!
            if (p != null) p = p.next
            if (q != null) q = q.next
        }
        if (carry > 0) {
            curr.next = ListNode(carry)
        }
        return dummyHead.next
    }
    fun addTwoNumbers2(l1: ListNode?, l2: ListNode?): ListNode? =
        when {
            l1 == null -> l2
            l2 == null -> l1
            l1.`val` == 0 && l1.next == null -> l2
            l2.`val` == 0 && l2.next == null -> l1
            else -> {
                val head: ListNode = ListNode(0)
                
                var prev = head
                var a = l1
                var b = l2
                var d = a.`val` + b.`val`

                while (a != null || b != null || d != 0) {
                    prev.next = ListNode(d % 10) 
                    prev = prev.next!!
                    a = a?.next
                    b = b?.next
                    
                    d = d / 10

                    if (a != null) {
                        d += a.`val`
                    }

                    if (b != null) {
                        d += b.`val`
                    }
                } 

                head.next
            }
        }

}