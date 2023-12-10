#include "TowSum.h"

class TowSum
{
public:
    std::vector<int> twoSum(std::vector<int> &nums, int target)
    {
        for (int i = 0; i < nums.size(); i++)
        {
            for (int j = i + 1; j < nums.size(); j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    return {i, j};
                }
            }
        }
        return {};
    }
    std::vector<int> twoSumRobada(std::vector<int> &nums, int target)
    {
        auto map = std::unordered_map<int, int>();
        for (int i = 0; i < nums.size(); i++)
        {
            auto number = nums[i];
            if (map.contains(number))
                return {map[number], i};
            map[target - number] = i;
        }

        return {-1, -1};
    }
};

// uso
// #include "TwoSum.h"

// int main()
// {
//     std::string name;
//     std::cout << "What is your name? ";
//     getline(std::cin, name);
//     std::cout << "Hello, " << name << "!\n";
//     int target = 9;
//     std::vector<int> nums = {2, 7, 11, 15};
//     TwoSum s;
//     std::vector<int> result = s.twoSum(nums, target);
//     if (!result.empty())
//     {
//         std::cout << "Indices que suman " << target << ": [" << result[0] << ", " << result[1] << "]\n";
//     }
//     else
//     {
//         std::cout << "No se encontraron índices que sumen " << target << ".\n";
//     }
// }
