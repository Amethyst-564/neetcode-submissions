class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
            } else {
                const lastChar = stack.pop();
                if (!lastChar) return false;

                const offset = char.charCodeAt() - lastChar.charCodeAt();
                if (offset !== 1 && offset !== 2) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
