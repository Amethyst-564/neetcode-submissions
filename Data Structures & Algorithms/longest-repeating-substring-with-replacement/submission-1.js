class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let start = 0;
        let maxRepeat = 0;
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            // 维护count表并更新次数最多的字符
            count[char] = (count[char] || 0) + 1;
            maxRepeat = Math.max(maxRepeat, count[char]);

            // 当窗口内字符 - 最多字符 大于k，说明k不够用，需要缩小窗口
            while (i - start + 1 - maxRepeat > k) {
                count[s[start]] -= 1;
                start++;
            }

            // 在k够用的前提下，更新最大长度
            res = Math.max(res, i - start + 1);
        }

        return res;
    }
}
