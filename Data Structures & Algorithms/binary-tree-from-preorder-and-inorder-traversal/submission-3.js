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
        let preIndex = 0;  // pre只是按顺序取节点
        let inIndex = 0;  // in做边界控制

        const dfs = (limit) => {
            if (preIndex >= preorder.length) return null;
            if (inorder[inIndex] === limit) {
                inIndex++;
                return null;
            }

            let root = new TreeNode(preorder[preIndex++]);
            root.left = dfs(root.val); // 左子树在中序上的边界是当前根节点
            root.right = dfs(limit); // 右子树在中序的边界仍然是上层的边界

            return root;
        };

        return dfs(Infinity);
    }
}
