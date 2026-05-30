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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preIndex = 0;
        let inIndex = 0;

        const dfs = (limit) => {
            if (preIndex >= preorder.length) return null;
            if (inorder[inIndex] === limit) {
                inIndex++;
                return null;
            }

            let root = new TreeNode(preorder[preIndex++]);
            root.left = dfs(root.val);
            root.right = dfs(limit);

            return root;
        };

        return dfs(Infinity);
    }
}
