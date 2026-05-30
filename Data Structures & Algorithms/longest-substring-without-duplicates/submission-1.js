class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        let res = 0;
        const set = new Set();
        for (let i = 0; i < s.length; i++) {
            while (set.has(s[i])) {
                // 从左边开始删，直到把那个重复的字符删掉
                set.delete(s[start]);
                start++;
            }
            set.add(s[i]);
            res = Math.max(res, i - start + 1);
        }

        return res;
    }
}
