namespace Csharp.TwoSum
{
    public class TwoSum
    {
        public int[] twoSum(int[] nums, int target)
        {
            int[] result = new int[2];
            for (int i = 0; i < nums.Length; i++)
            {
                for (int j = i + 1; j < nums.Length; j++)
                {
                    if (nums[i] + nums[j] == target)
                    {
                        result[0] = i;
                        result[1] = j;
                    }
                }
            }
            return result;
        }
        public int[] TwoSumRobada(int[] nums, int target)
        {
            Dictionary<int, int> numDict = new Dictionary<int, int>();

            for (int i = 0; i < nums.Length; i++)
            {
                var complement = target - nums[i];

                if (numDict.ContainsKey(complement))
                {
                    var compValue = numDict[complement];
                    return new int[] { compValue, i };
                }
                else if (!numDict.ContainsKey(nums[i]))
                {
                    numDict.Add(nums[i], i);
                }
            }
            return null;
        }
    }
}

// public static void Main(string[] args)
// {
//     TwoSum twoSum = new TwoSum();
//     int[] nums = new int[] { 2, 7, 11, 15 };
//     int target = 9;
//     int[] result = twoSum.twoSum(nums, target);
//     Console.WriteLine("[" + result[0] + ", " + result[1] + "]");
// }