class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // 统计需求
        let need = {};
        let window = {};
        let matchCount = 0;
        for (let char of t) need[char] = (need[char] || 0) + 1; // 需求表
        let needSize = Object.keys(need).length;


        // 用于切割
        let start = 0;
        let minLen = Infinity;

        // 窗口范围
        let left = 0,
            right = 0;
        while (right < s.length) {
            let char = s[right];
            right++;
            if (need[char]) {
                window[char] = (window[char] || 0) + 1;
                if (window[char] === need[char]) matchCount++; // 满足需求表中字符时，计数增加
            }

            // 满足全部需求时缩窗
            while (matchCount === needSize) {
                if (right - left < minLen) {
                    start = left;
                    minLen = right - left;
                }

                let d = s[left];
                left++; // 移出d
                if (need[d]) {
                    // 处理移出d的后遗症
                    if (window[d] === need[d]) matchCount--;
                    window[d]--;
                }
            }
        }

        return minLen === Infinity ? "" : s.slice(start, start + minLen);
    }
}
