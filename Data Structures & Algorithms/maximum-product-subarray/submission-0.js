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

            if (num < 0) {
                let temp = currentMax;
                currentMax = currentMin;
                currentMin = temp;
            }
            currentMax = Math.max(num, currentMax * num);
            currentMin = Math.min(num, currentMin * num);

            max = Math.max(max, currentMax);
        }

        return max;
    }
}
