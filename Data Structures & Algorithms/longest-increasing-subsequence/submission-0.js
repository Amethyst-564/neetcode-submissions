class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        if (nums.length === 0) return 0;

        // 以 nums[i] 作为结尾的最长递增子序列的长度。
        const dp = new Array(nums.length).fill(1);
        let maxLen = 1;

        // 外循环，依次计算每个位置的dp[i]
        for (let i = 1; i < nums.length; i++) {
            // 内循环，扫视前面所有可能的值
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    // 如果i的值大于j的值，说明可以接上
                    // 要找最长的那一条
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }

            maxLen = Math.max(maxLen, dp[i]);
        }

        return maxLen;
    }
}
