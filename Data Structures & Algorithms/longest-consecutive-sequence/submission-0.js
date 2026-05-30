class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let max = 0;
        // find the start num
        for (let num of nums) {
            if (!set.has(num - 1)) {
                // is start num
                let len = 1;
                let tmp = num
                while (set.has(tmp + 1)) {
                    len += 1
                    tmp += 1
                }
                max = len > max ? len : max
            }
        }
        return max
    }
}
