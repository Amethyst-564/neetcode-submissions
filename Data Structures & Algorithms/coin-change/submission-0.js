class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // 定义一个代表无解的大数字
        const max = amount + 1;
        // dp[i]为凑齐金额i的最少硬币数
        const dp = new Array(amount + 1).fill(max);
        dp[0] = 0;

        for (let i = 1; i <= amount; i++) {
            for (let coin of coins) {
                if (i >= coin) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        return dp[amount] > amount ? -1 : dp[amount];
    }
}
