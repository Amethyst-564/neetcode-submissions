class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // 特殊情况
        if (n <= 2) return n;

        // 空间优化法，去掉dp数组
        let first = 1;
        let second = 2;

        // 自底向上推导
        for (let i = 3; i <= n; i++) {
            let current = first + second;

            // 滚动变量
            first = second;
            second = current;
        }

        return second;
    }
}
