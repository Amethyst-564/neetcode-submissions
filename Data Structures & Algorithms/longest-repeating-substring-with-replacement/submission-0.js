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
            count[char] = (count[char] || 0) + 1;
            maxRepeat = Math.max(maxRepeat, count[char]);

            while (i - start + 1 - maxRepeat > k) {
                count[s[start]] -= 1;
                start++;
            }

            res = Math.max(res, i - start + 1);
        }

        return res;
    }
}
