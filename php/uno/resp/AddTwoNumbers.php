<?php
class ListNode {
    public $val = 0;
    public $next = null;
    function __construct(int $val = 0, ListNode $next = null) { 
        $this->val = $val; 
        $this->next = $next;
    }
}

class AddTwoNumbers {
    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers(ListNode $l1, ListNode $l2): ListNode {
        $carry = 0;
        $dummy = new ListNode(0);
        $curr = $dummy;
        while ($l1 != null || $l2 != null) {
            $x = ($l1 != null) ? $l1->val : 0;
            $y = ($l2 != null) ? $l2->val : 0;
            $sum = $x + $y + $carry;
            $carry = intval($sum / 10);
            $curr->next = new ListNode($sum % 10);
            $curr = $curr->next;
            if ($l1 != null) $l1 = $l1->next;
            if ($l2 != null) $l2 = $l2->next;
        }
        if ($carry > 0) {
            $curr->next = new ListNode($carry);
        }
        return $dummy->next;
    }
    function addTwoNumbers2(ListNode $l1, ListNode $l2): ListNode {
 
        $dummy = new ListNode();
        $current = $dummy;
        $carry = 0;

        while($l1 || $l2){

            $x = $l1 !== null ? $l1->val : 0;
            $y = $l2 !== null ? $l2->val : 0;
            
            $sum = $x + $y + $carry;

            $carry = (int) $sum / 10;
            $current->next = new ListNode($sum % 10);

            if($l1 !== null){
                $l1 = $l1->next;
            }

            if($l2 !== null){
                $l2 = $l2->next;
            }

            $current = $current->next;
        }

        if($carry >= 1){
            $current->next = new ListNode((int) $carry);
        }

        return $dummy->next;
        
    }
}