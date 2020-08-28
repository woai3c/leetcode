# [91. 解码方法](https://leetcode-cn.com/problems/decode-ways/)
一条包含字母 A-Z 的消息通过以下方式进行了编码：
```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```
给定一个只包含数字的非空字符串，请计算解码方法的总数。

示例 1:
```
输入: "12"
输出: 2
解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
```
示例 2:
```
输入: "226"
输出: 3
解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
```
## 解法
### 解一
递归
```js
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s || s == 0) return 0
    let result = 0
    const len = s.length

    function dfs(start) {
        if (start == len) return result++
        let c = s[start]
        // 如果为 0，直接返回。
        // 因为 0 本身或以 0 开头都不是合法字符。
        if (c == 0) return
        dfs(start + 1)
        if (start + 1 < len && c + s[start + 1] <= 26) {
            dfs(start + 2)
        }
    }

    dfs(0)
    return result
};
```
### 解二
[C++ 我认为很简单直观的解法](https://leetcode-cn.com/problems/decode-ways/solution/c-wo-ren-wei-hen-jian-dan-zhi-guan-de-jie-fa-by-pr/)
```js
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] == 0) return 0
    const dp = []
    const len = s.length
    dp[-1] = 1
    dp[0] = 1
    for (let i = 1; i < len; i++) {
        const pre = s[i - 1]
        const cur = s[i]
        
        if (cur == 0) {
            if (pre == 1 || pre == 2) {
                // 例如 210 这种情况，只有 1 种情况
                dp[i] = dp[i - 2]
            } else {
                return 0
            }
        } else if ((pre == 1) || (pre == 2 && cur <= 6)) {
            dp[i] = dp[i - 1] + dp[i - 2]
        } else {
            dp[i] = dp[i - 1]
        }
    }

    return dp[len - 1]
};
```
