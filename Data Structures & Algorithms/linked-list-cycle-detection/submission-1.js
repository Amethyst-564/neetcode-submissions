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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return false;

        const seen = new Set();
        let current = head;
        while (current.next !== null) {
            if (seen.has(current.val)) {
                return true;
            }
            seen.add(current.val);
            current = current.next;
        }

        return false;
    }
}
