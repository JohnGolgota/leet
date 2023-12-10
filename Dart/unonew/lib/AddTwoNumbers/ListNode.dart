class ListNode {
  int val;
  ListNode? next;

  ListNode(this.val, [this.next]);
  ListNode([this.val = 0, this.next])

  @override
  String toString() {
    return 'ListNode{val: $val, next: $next}';
  }
}