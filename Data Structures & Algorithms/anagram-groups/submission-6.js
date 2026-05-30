class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = new Map();
        for (let i = 0; i < strs.length; i++) {
            let ana = strs[i].split('').sort().join('');
            if(!group.has(ana)) {group.set(ana,[strs[i]]);}
            else {group.get(ana).push(strs[i]);}
        }
        return Array.from(group.values());
    }
}
