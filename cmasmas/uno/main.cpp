// Example program
#include <iostream>
#include <string>
#include <vector>

#include "TwoSum.h"

int main()
{
    std::string name;
    std::cout << "What is your name? ";
    getline(std::cin, name);
    std::cout << "Hello, " << name << "!\n";
    int target = 9;
    std::vector<int> nums = {2, 7, 11, 15};
    TwoSum s;
    std::vector<int> result = s.twoSum(nums, target);
    if (!result.empty())
    {
        std::cout << "Indices que suman " << target << ": [" << result[0] << ", " << result[1] << "]\n";
    }
    else
    {
        std::cout << "No se encontraron índices que sumen " << target << ".\n";
    }
}
