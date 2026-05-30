class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) return mid;

            if (nums[left] > nums[mid]) {
                // right is ordered
                if (nums[mid] < target && target <= nums[right]) {
                    // target 在右侧有序区间
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                // left is ordered
                if (nums[left] <= target && target < nums[mid]) {
                    // target 在左侧有序区间
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        return -1;
    }
}
