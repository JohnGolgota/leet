// using Csharp.TwoSum
using Csharp.AddTwoNumbers

namespace Csharp
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            // TwoSum twoSum = new TwoSum();
            // int[] nums = new int[] { 2, 7, 11, 15 };
            // int target = 9;
            // int[] result = twoSum.twoSum(nums, target);
            // Console.WriteLine("[" + result[0] + ", " + result[1] + "]");
            ListNode l1 = new ListNode(2);
            l1.next = new ListNode(4);
            l1.next.next = new ListNode(3);
            ListNode l2 = new ListNode(5);
            l2.next = new ListNode(6);
            l2.next.next = new ListNode(4);
            AddTwoNumbers addTwoNumbers = new AddTwoNumbers();
            ListNode result = addTwoNumbers.addTwoNumbers(l1, l2);
            while (result != null)
            {
                Console.WriteLine(result.val);
                result = result.next;
            }
        }
    }
}