package AddTwoNumbers

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var head, tail *ListNode
	var carry int
	for l1 != nil || l2 != nil || carry != 0 {
		var sum int
		if l1 != nil {
			sum += l1.Val
		}
		if l2 != nil {
			sum += l2.Val
		}
		sum += carry
		carry = sum / 10
		sum = sum % 10
		node := &ListNode{Val: sum}
		if head == nil {
			head = node
			tail = node
		} else {
			tail.Next = node
			tail = node
		}
		if l1 != nil {
			l1 = l1.Next
		}
		if l2 != nil {
			l2 = l2.Next
		}
	} // for>
	return head
}
func addTwoNumbers2(l1 *ListNode, l2 *ListNode) *ListNode {
	stepOn := 0
	var result = ListNode{}
	var head = &result

	for {
		if l1 == nil || l2 == nil {
			break
		}
		sum := l1.Val + l2.Val + stepOn
		stepOn = 0
		if sum >= 10 {
			sum -= 10
			stepOn = 1
		}
		l1 = l1.Next
		l2 = l2.Next
		head.Val = sum
		if l1 != nil || l2 != nil || stepOn > 0 {
			head.Next = &ListNode{}
		}
		head = head.Next
	}

	rest := l1
	if rest == nil {
		rest = l2
	}
	for rest != nil {
		sum := rest.Val + stepOn
		stepOn = 0
		if sum >= 10 {
			sum -= 10
			stepOn = 1
		}
		rest = rest.Next
		head.Val = sum
		if rest != nil || stepOn > 0 {
			head.Next = &ListNode{}
		}
		head = head.Next
	}
	if head != nil {
		head.Val = stepOn

	}
	return &result
}