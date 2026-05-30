class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const len = nums.length
        for(let i=0; i<len-1; i++) {
            let j=i+1
            while(j<len){
                if(nums[i]+nums[j]==target) {
                    return [i, j]
                }
                j++
            }
        }
    }
}
