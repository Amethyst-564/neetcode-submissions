class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return  s.length === t.length && [...s].sort().join('') === [...t].sort().join('');
    }
}
