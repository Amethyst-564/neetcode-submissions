class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        // 动态规划解法
        const wordSet = new Set(wordDict); // 提高查询效率
        const dp = new Array(s.length + 1).fill(false); // s的前i个字符能否被完美拆分
        dp[0] = true;

        let maxWordLen = 0;
        for (let word of wordDict) {
            maxWordLen = Math.max(maxWordLen, word.length);
        }

        for (let i = 1; i <= s.length; i++) {
            // 如果前半部分dp[j]合法，且后半部分子串在字典里，就是可以拆分，j是拆分点
            let start = Math.max(0, i - maxWordLen); // j不需要从0开始看，字典内容最大长度是确定的
            for (let j = start; j < i; j++) {
                if (dp[j] && wordSet.has(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }

        return dp[s.length];
    }
}
