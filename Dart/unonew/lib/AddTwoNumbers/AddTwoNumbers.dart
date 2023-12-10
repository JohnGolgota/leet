import 'package:unonew/AddTwoNumbers/ListNode.dart';

class AddTwoNumbers {
  ListNode? addTwoNumbers(ListNode? l1, ListNode? l2) {
    ListNode? head;
    ListNode? tail;
    int carry = 0;
    while (l1 != null || l2 != null) {
      int n1 = l1?.val ?? 0;
      int n2 = l2?.val ?? 0;
      int sum = n1 + n2 + carry;
      if (head == null) {
        head = tail = ListNode(sum % 10);
      } else {
        tail!.next = ListNode(sum % 10);
        tail = tail.next;
      }
      carry = sum ~/ 10;
      l1 = l1?.next;
      l2 = l2?.next;
    }
    if (carry > 0) {
      tail!.next = ListNode(carry);
    }
    return head!;
  }
  ListNode? addTwoNumbers2(ListNode? l1, ListNode? l2) {

    ListNode result = ListNode();
    ListNode? ptr = result;
    int carry = 0;

    while (carry > 0 || l1 != null || l2 != null){
      int addend1 = l1?.val ?? 0;
      int addend2 = l2?.val ?? 0;
      int sum = carry + addend1 + addend2;
      carry = sum ~/ 10;
      ptr?.next = ListNode(sum % 10);
      
      ptr = ptr?.next;
      l1 = l1?.next;
      l2 = l2?.next;
    }

    return result?.next;
  }
}