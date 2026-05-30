class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = new Array(len);

        const prefix = new Array(len).fill(1);
        // prefix[i]为i左侧内容的积
        for (let i = 1; i < len; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        const suffix = new Array(len).fill(1);
        // suffix[i]为i右侧内容的积
        for (let i = len - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        for (let i = 0; i < len; i++) {
            res[i] = prefix[i] * suffix[i];
        }
        return res;
    }
}
