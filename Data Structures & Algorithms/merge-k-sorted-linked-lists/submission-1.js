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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        for (let i = 0; i < lists.length; i++) {
            lists[i] = this.mergeTwoLists(lists[i], lists[i - 1]);
        }

        return lists[lists.length - 1];
    }

    mergeTwoLists(first, second) {
        const dummy = new ListNode(0);
        let current = dummy;

        while (first && second) {
            if (first.val < second.val) {
                current.next = first;
                first = first.next;
            } else {
                current.next = second;
                second = second.next;
            }
            current = current.next;
        }
        current.next = first !== null ? first : second;

        return dummy.next;
    }
}
