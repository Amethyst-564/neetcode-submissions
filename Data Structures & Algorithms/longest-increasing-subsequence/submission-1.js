class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // 贪心+二分查找！

        const tails = [];

        for (let num of nums) {
            let left = 0;
            let right = tails.length;

            // 二分查找 num应该插入或者覆盖的位置
            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (tails[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            // 覆盖或者新增
            tails[left] = num;
        }

        return tails.length;
    }
}
