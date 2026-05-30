class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        const extend = (l, r) => {
            let count = 0;
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                count++;
                l--;
                r++;
            }
            return count;
        };

        for (let i = 0; i < s.length; i++) {
            res += extend(i, i);
            res += extend(i, i + 1);
        }

        return res;
    }
}
