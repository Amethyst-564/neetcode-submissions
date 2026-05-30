class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        const extend = (l, r) => {
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                res++;
                l--;
                r++;
            }
        };

        for (let i = 0; i < s.length; i++) {
            extend(i, i);  // 奇回文，奇回文会包括单个字符本身
            extend(i, i + 1);  // 偶回文
        }

        return res;
    }
}
