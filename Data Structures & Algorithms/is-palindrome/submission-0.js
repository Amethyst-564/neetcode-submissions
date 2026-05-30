class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        const len = cleaned.length;
        for (let i = 0; i < (len - 1) / 2; i++) {
            if (cleaned[i] !== cleaned[len - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}
