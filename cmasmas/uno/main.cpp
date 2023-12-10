// Example program
#include <iostream>
#include <string>
#include <vector>

#include "AddTwoNumbers.h"

int main()
{
    ListNode *l1 = new ListNode(2);
    l1->next = new ListNode(4);
    l1->next->next = new ListNode(3);

    ListNode *l2 = new ListNode(5);
    l2->next = new ListNode(6);
    l2->next->next = new ListNode(4);

    AddTwoNumbers s;
    ListNode *result = s.addTwoNumbers(l1, l2);
    while (result != nullptr)
    {
        std::cout << result->val << " -> ";
        result = result->next;
    }
    std::cout << "null\n";
}