class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        let res = 0;
        const map = new Map();

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                // 取max操作为了防止 start 指针向左回退，确保它永远只往右走。
                start = Math.max(start, map.get(s[i]) + 1);
            }
            map.set(s[i], i);
            res = Math.max(res, i - start + 1);
        }

        return res;
    }
}
