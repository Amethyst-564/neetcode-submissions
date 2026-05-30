class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        const base = 'a'.charCodeAt(0)
        for (let str of strs) {
            const count = new Array(26).fill(0);
            for (let c of str) {
                count[c.charCodeAt(0) - base] += 1;
            }
            const key = count.join(',')
            if (!map[key]) map[key] = []
            map[key].push(str)
        }

        return Object.values(map)
    }
}
