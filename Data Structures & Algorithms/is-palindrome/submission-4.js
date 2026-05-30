class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        // 原地双指针比整个字符串替换后再双指针性能更优
        while (left < right) {
            // 三种状态，动左边/动右边/进行比对
            if (!this.isAlphaNumeric(s[left])) {
                left++;
            } else if (!this.isAlphaNumeric(s[right])) {
                right--;
            } else {
                if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                    return false;
                }
                left++;
                right--;
            }
        }

        return true;
    }

    isAlphaNumeric(char) {
        const code = char.charCodeAt(0);
        return (
            (code >= 48 && code <= 57) || // 0-9
            (code >= 65 && code <= 90) || // A-Z
            (code >= 97 && code <= 122) // a-z
        );
        // charcode比正则性能更优
        // return /[a-zA-Z0-9]/.test(char);
    }
}
