class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];

        // 滚动变量代替dp数组
        let first = nums[0];
        let second =  Math.max(nums[0], nums[1]);

        for (let i = 2; i < nums.length; i++) {
            // 偷当前还是不偷当前（继承上一间房的值）
            let current = Math.max(first + nums[i], second);
            first = second;
            second = current;
        }

        return second;
    }
}
