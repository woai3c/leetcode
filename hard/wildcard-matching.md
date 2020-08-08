# [44. 通配符匹配](https://leetcode-cn.com/problems/wildcard-matching/)
给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
```
'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。
```
两个字符串完全匹配才算匹配成功。

说明:

* s 可能为空，且只包含从 a-z 的小写字母。
* p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
示例 1:
```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```
示例 2:
```
输入:
s = "aa"
p = "*"
输出: true
解释: '*' 可以匹配任意字符串。
```
示例 3:
```
输入:
s = "cb"
p = "?a"
输出: false
解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
```
示例 4:
```
输入:
s = "adceb"
p = "*a*b"
输出: true
解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
```
示例 5:
```
输入:
s = "acdcb"
p = "a*c?b"
输出: false
```
## 解法
### 解一
**动态规划**
* [一个棋盘看懂动态规划(DP)思路；附Python代码](https://leetcode-cn.com/problems/wildcard-matching/solution/yi-ge-qi-pan-kan-dong-dong-tai-gui-hua-dpsi-lu-by-/)
* [官方题解](https://leetcode-cn.com/problems/wildcard-matching/solution/tong-pei-fu-pi-pei-by-leetcode-solution/)
```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const pLen = p.length // s 为横轴
    const sLen = s.length // p 为纵轴
    const dp = []
    for (let i = 0; i <= sLen; i++) {
        dp.push(new Array(pLen + 1).fill(false))
    }

    dp[0][0] = true
    for (let i = 1; i <= pLen; i++) {
        if (p[i - 1] == '*') {
            dp[0][i] = true
        } else {
            break
        }
    }

    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] == s[i - 1] || p[j - 1] == '?') {
                dp[i][j] = dp[i - 1][j - 1]
            } else if (p[j - 1] == '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
            }
        }
    }

    return dp[sLen][pLen]
};
```
### 解二
贪心算法
