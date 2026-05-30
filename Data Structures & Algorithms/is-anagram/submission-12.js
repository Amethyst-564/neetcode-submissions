class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // if (s.length !== t.length) return false;
        // const count = {};

        // for(let c of s) count[c] = (count[c] || 0) + 1;
        // for(let c of t) {
        //     if (!count[c]) return false;
        //     count[c]--;
        // }
        // return true
        if (s.length !== t.length) {
            return false;
        }

        const base = 'a'.charCodeAt(0);
        const count = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - base]++;
            count[t.charCodeAt(i) - base]--;
        }
        return count.every((val) => val === 0);
    }
}
