class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length === 0) return 0;

        let buy = prices[0];
        let profit = 0;

        for (let i = 1; i < prices.length; i++) {
            const tmpProfit = prices[i] - buy;
            if (tmpProfit < 0) {
                buy = prices[i];
            } else {
                profit = Math.max(profit, tmpProfit);
            }
        }

        return profit;
    }
}
