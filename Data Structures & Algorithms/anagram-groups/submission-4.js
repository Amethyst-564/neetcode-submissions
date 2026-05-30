class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const sorted = [...strs[i]].sort().join('')
            if (map.has(sorted)) {
                map.get(sorted).push(strs[i])
            } else {
                map.set(sorted, [strs[i]])
            }
        }

        return Array.from(map.values())
    }
}
