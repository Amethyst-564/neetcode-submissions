class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (!s || s[0] === "0") return 0;

        const n = s.length;
        // 滚动变量法
        let prev2 = 1; // dp[i-2]
        let prev1 = 1; // dp[i-1]

        for (let i = 2; i <= s.length; i++) {
            let current = 0;
            const one = parseInt(s.substring(i - 1, i));
            const two = parseInt(s.substring(i - 2, i));

            // 合法的一位数解
            if (one >= 1 && one <= 9) {
                current += prev1;
            }

            // 合法的二位数解
            if (two >= 10 && two <= 26) {
                current += prev2;
            }

            // 继续滚动
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
