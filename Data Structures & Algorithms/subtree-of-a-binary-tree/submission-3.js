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
    isSubtree(root, subRoot) {
        // 1. 将原树和子树分别序列化
        const serialized_root = this.serialize(root);
        const serialized_subRoot = this.serialize(subRoot);

        // 2. 将它们组合起来：子树字符串 + '|' + 原树字符串
        // 使用管道符 '|' 可以防止子树的匹配越界窜到其他节点
        const combined = serialized_subRoot + '|' + serialized_root;

        // 3. 计算组合字符串的 Z-values
        const z_values = this.z_function(combined);
        const sub_len = serialized_subRoot.length;

        // 4. 扫描 Z 数组，寻找是否存在长度等于 sub_len 的匹配项
        // 从 sub_len + 1 开始，即越过前面的 subRoot 串和分隔符 '|'
        for (let i = sub_len + 1; i < combined.length; i++) {
            if (z_values[i] === sub_len) {
                return true; // 找到了完全匹配的子串
            }
        }

        return false;
    }

    serialize(root) {
        // 如果节点为空，用 '$#' 表示空指针
        // $ 作为前缀是为了将不同值的节点区分开（比如 1 和 12 加上分隔符后不会混淆）
        if (root === null) {
            return '+-';
        }
        
        // 拼接格式: $ + val + 左子树序列化 + 右子树序列化
        // 递归先序遍历，序列化一棵树
        return (
            '+' +
            root.val +
            this.serialize(root.left) +
            this.serialize(root.right)
        );
    }

    /**
     * Z-函数实现（线性字符串匹配）
     * 计算字符串中每个位置与整个字符串前缀的最长公共前缀长度（LCP）
     * @param {string} s
     * @return {number[]}
     */
    z_function(s) {
        const z = new Array(s.length).fill(0);
        let l = 0, // 当前已知匹配区间的左边界
            r = 0, // 当前已知匹配区间的右边界
            n = s.length;

        for (let i = 1; i < n; i++) {
            // 情况 1: i 在 [l, r] 区间内，复用之前计算过的结果
            if (i <= r) {
                z[i] = Math.min(r - i + 1, z[i - l]);
            }

            // 情况 2: 暴力向后扩展匹配，检查字符是否相同
            while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
                z[i]++;
            }

            // 情况 3: 如果匹配的右端点超过了当前的 r，更新 [l, r] 窗口
            if (i + z[i] - 1 > r) {
                l = i;
                r = i + z[i] - 1;
            }
        }
        return z;
    }
}
