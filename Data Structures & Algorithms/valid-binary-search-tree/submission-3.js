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
     * @return {boolean}
     */
    isValidBST(root) {
        let stack = [];
        let pre = -Infinity;
        let cur = root;

        while (stack.length || cur) {
            while (cur) {
                // 向左下钻到底
                stack.push(cur);
                cur = cur.left;
            }

            cur = stack.pop();
            if (cur.val <= pre) return false;
            pre = cur.val;
            cur = cur.right;
        }

        return true;
    }
}
