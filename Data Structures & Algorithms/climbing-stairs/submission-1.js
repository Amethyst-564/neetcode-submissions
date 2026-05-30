class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // 特殊情况
        if (n <= 2) return n;

        // 创建dp数组
        const dp = new Array(n + 1);
        // 初始化已知状态
        dp[1] = 1;
        dp[2] = 2;

        // 自底向上推导
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}
