class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length <= 1) return 0;

        // 按照end升序
        intervals.sort((a, b) => a[1] - b[1]);

        let removeCount = 0;

        let lastEnd = intervals[0][1]; // 第一个区间的end

        for (let i = 1; i < intervals.length; i++) {
            const currentInterval = intervals[i];

            if (currentInterval[0] < lastEnd) {
                // 有重叠
                removeCount++;
            } else {
                // 没有重叠
                lastEnd = currentInterval[1];
            }
        }

        return removeCount;
    }
}
