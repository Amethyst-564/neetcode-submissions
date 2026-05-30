/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let pre = null;
        let current = head;

        while(current!==null) {
            let next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }

        return pre;
    }
}
