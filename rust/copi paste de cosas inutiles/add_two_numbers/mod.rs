#[derive(PartialEq, Eq, Clone, Debug)]

impl AddTwoNumbers {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut l1 = l1;
        let mut l2 = l2;
        let mut carry = 0;
        let mut result = Some(Box::new(ListNode::new(0)));
        let mut current = &mut result;
        while l1.is_some() || l2.is_some() {
            let mut sum = carry;
            if let Some(l1_node) = l1 {
                sum += l1_node.val;
                l1 = l1_node.next;
            }
            if let Some(l2_node) = l2 {
                sum += l2_node.val;
                l2 = l2_node.next;
            }
            carry = sum / 10;
            if let Some(current_node) = current {
                current_node.next = Some(Box::new(ListNode::new(sum % 10)));
                current = &mut current_node.next;
            }
        }
        if carry > 0 {
            if let Some(current_node) = current {
                current_node.next = Some(Box::new(ListNode::new(carry)));
            }
        }
        result.unwrap().next
    }
    pub fn add_two_numbers2(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut mult = 1;
        let mut _l1 = l1;
        let mut _l2 = l2;
        let mut running_list: Vec<i32> = Vec::new();

        // convert into easily-accessible vector
        if let Some(mut node1) = _l1 {
            let mut notnone = true;
            while notnone {
                running_list.push(node1.val);
                if !node1.next.is_none() {
                    node1 = node1.next.unwrap();
                } else {
                    notnone = false;
                }
            }
        }

        // add while traversing
        while let Some(mut node2) = _l2 {
            let mut add = true;
            let mut count = 0;
            let mut carry = 0;
            let mut digit_total = 0;
            let mut curval = running_list[0];
            while add {
                digit_total = curval + node2.val + carry;
                carry = (digit_total >= 10) as i32;
                digit_total =
                    (carry * (digit_total - 10)) + (((digit_total < 10) as i32) * digit_total);
                if count < running_list.len() {
                    running_list[count] = digit_total;
                    if count < running_list.len() - 1 {
                        curval = running_list[count + 1];
                    } else {
                        curval = 0;
                    }
                } else {
                    running_list.push(digit_total);
                }

                if count >= running_list.len() - 1 && node2.next.is_none() {
                    if carry == 1 {
                        running_list.push(carry);
                    }
                    add = false;
                }
                if count >= running_list.len() && carry == 1 {
                    curval = 0;
                }
                node2 = node2.next.unwrap_or(Box::new(ListNode::new(0)));

                count += 1;
            }
            break;
        }

        println!("{:?}", running_list);
        let mut final_sum = Some(Box::new(ListNode::new(running_list[0])));
        let mut node_ref = final_sum.as_mut();
        for i in 1..running_list.len() {
            if i >= running_list.len() {
                break;
            }
            if let Some(node) = node_ref.take() {
                node.next = Some(Box::new(ListNode::new(running_list[i])));
                node_ref = node.next.as_mut();
            }
        }

        return final_sum;
    }
}
