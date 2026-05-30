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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    // 递归DFS + 非递归DFS isSameTree
    isSubtree(root, subRoot) {
        if (!subRoot) return false;
        if (!root) return false;

        if (root.val === subRoot.val) {
            if (this.isSameTree(root, subRoot)) return true;
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(p, q) {
        const stack = [p, q];

        while (stack.length > 0) {
            const node2 = stack.pop();
            const node1 = stack.pop();

            if (!node1 && !node2) {
                continue; // node1 === node2 === null
            }
            if (!node1 || !node2 || node1.val !== node2.val) {
                return false; // node1 !== node2
            }

            stack.push(node1.left);
            stack.push(node2.left);
            stack.push(node1.right);
            stack.push(node2.right);
        }

        return true;
    }
}
