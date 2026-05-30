class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        // 贪心+二分查找！

        const tails = []; // 存放每个牌堆顶端牌面的数组

        for (let num of nums) {
            // 在现有的牌堆顶（tails）里，用二分查找找到第一个 >= num 的位置
            let left = 0,
                right = tails.length;

            while (left < right) {
                let mid = Math.floor((left + right) / 2);
                if (tails[mid] < num) {
                    left = mid + 1; // 牌太大了，往右边堆找
                } else {
                    right = mid; // 牌够小，锁住当前位置，继续往左看看能不能更靠左
                }
            }

            // 循环结束时，left 就是 num 应该压入的那个牌堆的索引
            // 如果 left 等于 tails.length，说明所有堆都压不住它，新建一个堆
            // 如果 left 小于 tails.length，说明找到了能压的堆，用新牌 num 覆盖它（更新堆顶）
            tails[left] = num;
        }

        // 最终牌堆的总数，就是最长递增子序列的长度！
        return tails.length;
    }
}
