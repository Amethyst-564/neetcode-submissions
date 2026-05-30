class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        const robLiner = (start, end) => {
            let first = nums[start];
            let second = Math.max(nums[start], nums[start + 1]);

            for (let i = start + 2; i <= end; i++) {
                let current = Math.max(first + nums[i], second);
                first = second;
                second = current;
            }

            return second;
        };

        const planA = robLiner(0, nums.length - 2);
        const planB = robLiner(1, nums.length - 1);

        return Math.max(planA, planB);
    }
}
