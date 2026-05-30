class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        let i = 0;
        const n = intervals.length;

        // 左侧区间
        while (i < n && intervals[i][1] < newInterval[0]) {
            res.push(intervals[i]);
            i++;
        }

        // 重叠部分
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
            i++;
        }
        res.push(newInterval);

        // 右侧区间
        while (i < n) {
            res.push(intervals[i]);
            i++;
        }

        return res;
    }
}
