class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;

        // res存储prefix内容
        const res = new Array(len).fill(1);
        for (let i = 1; i < len; i++) {
            res[i] = res[i - 1] * nums[i - 1];
        }

        let suffix = 1;  // suffix动态更新
        // 从右往左更新res的值为prefix*suffix
        for (let i = len - 1; i >= 0; i--) {
            res[i] = res[i] * suffix;
            suffix *= nums[i];
        }

        return res;
    }
}
