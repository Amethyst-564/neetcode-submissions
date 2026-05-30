class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = "";

        const extend = (l, r) => {
            // 扩张条件
            while (l >= 0 && r < s.length && s[l] === s[r]) {
                l--;
                r++;
            }

            // 停止扩张时，s[l] !== s[r]，合法区间是[l+1, r-1]
            const str = s.slice(l + 1, r);
            if (str.length > res.length) {
                res = str;
            }
        };

        for (let i = 0; i < s.length; i++) {
            extend(i, i); // 奇回文，从中心扩张
            extend(i, i + 1); // 偶回文，从两个字符往外扩张
        }

        return res;
    }
}
