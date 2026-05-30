class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[left] < nums[right]) {
                return nums[left];
            }

            let mid = Math.floor((left + right) / 2);

            if (nums[left] > nums[mid]) {
                // break point in left
                right = mid;
            } else {
                // break point in right
                left = mid + 1;
            }
        }
        return nums[left];
    }
}
