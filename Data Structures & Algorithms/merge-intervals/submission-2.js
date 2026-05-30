class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        if (intervals.length <= 1) return intervals;

        // 按照start进行排序
        intervals.sort((a, b) => a[0] - b[0]);

        const res = [intervals[0]];  // 放进去第一个当做参照物

        for (let i = 1; i < intervals.length; i++) {
            const cur = intervals[i];
            const last = res[res.length - 1]; // 每次和res中最后一个进行对比

            if (cur[0] <= last[1]) {
                // 有重叠
                last[1] = Math.max(last[1], cur[1]);
            } else {
                res.push(cur);
            }
        }

        return res;
    }
}
