class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // 统计需求
        let need = {};
        for (let char of t) need[char] = (need[char] || 0) + 1; // 需求表
        let needSize = Object.keys(need).length;
        let matchCount = 0;

        // 用于切割
        let start = 0;
        let minLen = Infinity;

        // 窗口范围
        let left = 0;
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            // 减法代替双表，只处理need中存在的字符
            if (need[char] !== undefined) {
                need[char]--;
                if (need[char] === 0) matchCount++; // 刚好为0时达标
            }

            // 满足全部需求时缩窗
            while (matchCount === needSize) {
                if (right - left + 1 < minLen) {
                    start = left;
                    minLen = right - left + 1;
                }

                const lChar = s[left];
                left++;
                if (need[lChar] !== undefined) {
                    if (need[lChar] === 0) matchCount--;
                    need[lChar]++;
                }
            }
        }

        return minLen === Infinity ? "" : s.slice(start, start + minLen);
    }
}
