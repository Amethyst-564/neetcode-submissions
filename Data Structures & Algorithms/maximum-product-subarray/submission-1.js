class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (nums.length === 0) return 0;

        let max = nums[0];

        // 滚动变量
        let currentMax = nums[0];
        let currentMin = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const num = nums[i];

            const possible1 = currentMax * num;
            const possible2 = currentMin * num;

            currentMax = Math.max(num, possible1, possible2);
            currentMin = Math.min(num, possible1, possible2);

            max = Math.max(max, currentMax);
        }

        return max;
    }
}
