class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const sorted = new Array(strs.length).fill(0);
        for (let i = 0; i < strs.length; i++) {
            sorted[i] = [...strs[i]].sort().join('')
        }

        const tmp = {}
        for (let i = 0; i < sorted.length; i++) {
            if (tmp[sorted[i]]) {
                tmp[sorted[i]].push(i)
            } else {
                tmp[sorted[i]] = [i]
            }
        }

        const res = []
        for (let v of Object.values(tmp)) {
            const t = []
            for (let i of v) {
                t.push(strs[i])
            }
            res.push(t)
        }
        return res
    }
}
