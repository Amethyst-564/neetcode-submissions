class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!s || s[0] === '0') return 0;

        const n = s.length;
        // 定义dp数组，dp[i]代表s的前i个字符的解码方法
        const dp = new Array(n + 1).fill(0);
        dp[0] = 1; // 空数组算1种
        dp[1] = 1; // s[0]肯定不是0，也只有1种

        for (let i = 2; i <= n; i++) {
            const one = parseInt(s.substring(i - 1, i));
            const two = parseInt(s.substring(i - 2, i));

            // 合法的一位数解
            if (one >= 1 && one <= 9) {
                dp[i] += dp[i - 1];
            }

            // 合法的二位数解
            if (two >= 10 && two <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];
    }
}
