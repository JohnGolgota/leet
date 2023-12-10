namespace Csharp.ListNode
{
    public class ListNode
    {
        public int val;
        public ListNode next;
        public ListNode(int x) { val = x; }
        public ListNode() { }
        public ListNode(int val = 0, ListNode next = null) { this.val = val; this.next = next; }
    }
}