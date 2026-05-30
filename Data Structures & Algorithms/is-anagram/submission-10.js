class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const count = {};

        for(let c of s) count[c] = (count[c] || 0) + 1;
        for(let c of t) {
            if (!count[c]) return false;
            count[c]--;
        }
        return true
    }
}
