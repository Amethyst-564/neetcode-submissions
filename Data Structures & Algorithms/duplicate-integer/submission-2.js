class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // return new Set(nums).size !== nums.length
        const seen = new Set();
        for(const num of nums ) {
            if(seen.has(num)) return true
             seen.add(num)
        }
        return false
    }
}
