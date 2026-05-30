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
        // 缓存索引，中序节点左侧是左子树，右侧是右子树
        const map = new Map();
        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        /**
         * 通过左右边界构建子树
         */
        const helper = (pStart, pEnd, iStart, iEnd) => {
            if (pStart > pEnd || iStart > iEnd) return null;

            // 先序遍历第一个节点是当前子树的根节点
            const rootVal = preorder[pStart];
            const root = new TreeNode(rootVal);

            // 拿到根节点在中序中的index
            const mid = map.get(rootVal);
            // 左子树节点数
            const leftNodesCount = mid - iStart;

            // 先序跳过当前根，取leftNodesCount个内容；中序就是mid左侧部分
            root.left = helper(pStart + 1, pStart + leftNodesCount, iStart, mid - 1);

            // 先序跳过当前根+左子树个内容；中序是mid右侧内容
            root.right = helper(pStart + leftNodesCount + 1, pEnd, mid + 1, iEnd);

            return root;
        };

        return helper(0, preorder.length - 1, 0, inorder.length - 1);
    }
}
