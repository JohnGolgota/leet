package main

import (
	"fmt"
	"uno.com/leet/pkg/AddTwoNumbers"
)

func main() {
	l1 := &AddTwoNumbers.ListNode{Val: 2}
	l1.Next = &AddTwoNumbers.ListNode{Val: 4}
	l1.Next.Next = &AddTwoNumbers.ListNode{Val: 3}
	l2 := &AddTwoNumbers.ListNode{Val: 5}
	l2.Next = &AddTwoNumbers.ListNode{Val: 6}
	l2.Next.Next = &AddTwoNumbers.ListNode{Val: 4}
	result := AddTwoNumbers.AddTwoNumbers(l1, l2)
	fmt.Println(result.Val)
	fmt.Println("Hello, world.")
}