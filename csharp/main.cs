using Csharp.TwoSum

namespace Csharp
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            TwoSum twoSum = new TwoSum();
            int[] nums = new int[] { 2, 7, 11, 15 };
            int target = 9;
            int[] result = twoSum.twoSum(nums, target);
            Console.WriteLine("[" + result[0] + ", " + result[1] + "]");
        }
    }
}