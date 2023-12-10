using Csharp.ListNode;

namespace Csharp.AddTwoNumbers
{
    public class AddTwoNumbers
    {
        public ListNode addTwoNumbers(ListNode l1, ListNode l2)
        {
            ListNode result = new ListNode(0);
            ListNode current = result;
            int carry = 0;
            while (l1 != null || l2 != null)
            {
                int x = (l1 != null) ? l1.val : 0;
                int y = (l2 != null) ? l2.val : 0;
                int sum = carry + x + y;
                carry = sum / 10;
                current.next = new ListNode(sum % 10);
                current = current.next;
                if (l1 != null) l1 = l1.next;
                if (l2 != null) l2 = l2.next;

            }
            if (carry > 0)
            {
                current.next = new ListNode(carry);
            }
            return result.next;
        }
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            ListNode resultHead = new ListNode();
            ListNode resultCur = resultHead;
            while (l1 != null || l2 != null)
            {
                int n1 = (l1 != null) ? l1.val : 0;
                int n2 = (l2 != null) ? l2.val : 0;

                if (l1 != null) l1 = l1.next;
                if (l2 != null) l2 = l2.next;



                resultCur.val += n1 + n2;



                if (resultCur.val >= 10)
                {
                    resultCur.val -= 10;
                    resultCur.next = new ListNode(1);


                }
                if (((l1 != null) || (l2 != null)) && resultCur.next == null)
                {
                    resultCur.next = new ListNode();


                }


                resultCur = resultCur.next;

            }
            return resultHead;
        }
    }
}