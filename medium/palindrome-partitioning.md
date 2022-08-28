# [131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。

 

示例 1：
```
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]
``` 

提示：

* 1 <= s.length <= 16
* s 仅由小写英文字母组成

## 解法
[题解](https://leetcode.cn/problems/palindrome-partitioning/solution/fen-ge-hui-wen-chuan-by-leetcode-solutio-6jkv/)
```js
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = []
    const answers = []
    const len = s.length
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(0))

    /**
     * s[i..j] 为回文串的条件，满足其一即可
     * 1. 当且仅当其为空串（i>j），其长度为 1（i=j）
     * 2. 首尾字符相同且 s[i+1..j-1] 为回文串。
     */
    function isPalindrome(i, j) {
        if (dp[i][j] !== 0) return dp[i][j]

        if (i >= j) {
            dp[i][j] = 1
        } else if (s[i] === s[j]) {
            dp[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            dp[i][j] = -1
        }

        return dp[i][j]
    }

    function dfs(i) {
        if (i === len) {
            result.push(answers.slice())
            return
        }

        for (let j = i; j < len; j++) {
            if (isPalindrome(i, j) === 1) {
                answers.push(s.slice(i, j + 1))
                dfs(j + 1)
                answers.pop()
            }
        }
    }

    dfs(0)

    return result
};
```
