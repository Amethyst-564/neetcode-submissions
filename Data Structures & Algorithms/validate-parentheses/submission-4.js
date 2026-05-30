class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        if (s.length % 2 !== 0) return false;

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (["(", "[", "{"].includes(char)) {
                stack.push(char);
            } else if ([")", "]", "}"].includes(char)) {
                const lastChar = stack.pop();
                if (!lastChar) return false;
                const offset = char.charCodeAt() - lastChar.charCodeAt();
                console.log(char, lastChar, offset);
                if (offset !== 1 && offset !== 2) {
                    return false;
                }
            }
        }

        return stack.length === 0 ? true : false;
    }
}
