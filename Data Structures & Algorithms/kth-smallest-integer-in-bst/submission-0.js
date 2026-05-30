/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const order = [];
        const stack = [];
        let cur = root;

        while (stack.length || cur) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            order.push(cur.val);
            cur = cur.right;
        }

        return order[k - 1];
    }
}
