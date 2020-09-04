# [115. 不同的子序列](https://leetcode-cn.com/problems/distinct-subsequences/)
给定一个字符串 S 和一个字符串 T，计算在 S 的子序列中 T 出现的个数。

一个字符串的一个子序列是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

题目数据保证答案符合 32 位带符号整数范围。

 

示例 1：
```
输入：S = "rabbbit", T = "rabbit"
输出：3
解释：

如下图所示, 有 3 种可以从 S 中得到 "rabbit" 的方案。
(上箭头符号 ^ 表示选取的字母)

rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
```
示例 2：
```
输入：S = "babgbag", T = "bag"
输出：5
解释：

如下图所示, 有 5 种可以从 S 中得到 "bag" 的方案。 
(上箭头符号 ^ 表示选取的字母)

babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
```
## 解法
动态规划
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const dp = []
    const sLen = s.length
    const tLen = t.length
    for (let i = 0; i <= tLen; i++) {
        dp.push(new Array(sLen + 1))
    }

    // 当 s 为空串时，t 无法匹配
    for (let i = 0; i <= tLen; i++) {
        dp[i][0] = 0
    }

    // 当 t 为空时，s 任意字符都能匹配
    for (let j = 0; j <= sLen; j++) {
        dp[0][j] = 1
    }

    // 假设
    // s = aaa
    // t = aa
    // 当 s[2] == t[1]，如果 s 取最后一个 a，则 dp[i][j] = dp[i - 1][j - 1]。
    // 双方都消耗了 a
    // 但 s 中是可能有重复字符的，它也可以不取 a，这时就变成了 s = aa
    // 所以这时结果就变成了在 s = aa 中查找 t 能有多少个匹配结果。即 dp[i][j] = dp[i][j - 1]。
    for (let i = 1; i <= tLen; i++) {
        for (let j = 1; j <= sLen; j++) {
            if (t[i - 1] == s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
            } else {
                dp[i][j] = dp[i][j - 1]
            }
        }
    }

    return dp[tLen][sLen]
};
```
