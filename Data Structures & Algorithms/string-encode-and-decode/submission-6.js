class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (let str of strs) {
            res += str.length + '#' + str
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf('#', i)  // search # from i
            const len = parseInt(str.substring(i, j))

            res.push(str.substring(j + 1, j + 1 + len))

            i = j + 1 + len
        }
        return res
    }
}
