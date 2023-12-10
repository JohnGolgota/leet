#ifndef TWOSUM_H
#define TWOSUM_H

#include <vector>
#include <unordered_map>
#include <xstring>
#include <xhash>

class TowSum
{
public:
    std::vector<int> twoSum(std::vector<int> &nums, int target);
    std::vector<int> twoSumRobada(std::vector<int> &nums, int target);
};

#endif // TWOSUM_H