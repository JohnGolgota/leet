#ifndef ADDTWONUMBERS_H
#define ADDTWONUMBERS_H

#include <cstddef>

struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class AddTwoNumbers
{
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2);
    ListNode *addTwoNumbersRobada(ListNode *l1, ListNode *l2);
};

#endif // ADDTWONUMBERS_H