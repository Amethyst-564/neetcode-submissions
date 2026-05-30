class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const sorted = [...strs[i]].sort().join('')
            if (map[sorted]) {
                map[sorted].push(strs[i])
            } else {
                map[sorted] = [strs[i]]
            }
        }

        return Object.values(map)
    }
}
