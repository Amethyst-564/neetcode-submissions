class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // O(n) 拿到数字次数
        const count = {}
        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        // 每个数出现的次数为0-nums.length，将次数转换为数组下标，省去一次排序
        const feq = Array.from({ length: nums.length + 1 }, () => [])
        for (let c in count) {
            feq[count[c]].push(parseInt(c))
        }

        const res = [];
        // 最后一个桶往前拿k
        for (let i = feq.length - 1; i > 0; i--) {
            for (const n of feq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
