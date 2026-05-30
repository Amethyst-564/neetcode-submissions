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
                start = Math.max(start, map.get(s[i]) + 1);
            }
            map.set(s[i], i);
            res = Math.max(res, i - start + 1);
        }

        return res;
    }
}
