# [72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/)
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

* 插入一个字符
* 删除一个字符
* 替换一个字符
 

示例 1：
```
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```
示例 2：
```
输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
```
## 解法
[官方题解](https://leetcode-cn.com/problems/edit-distance/solution/bian-ji-ju-chi-by-leetcode-solution/) 动态规划。
```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    const dp = []
    const len1 = word1.length
    const len2 = word2.length
    for (let i = 0; i <= len1; i++) {
        dp.push(new Array(len2 + 1))
    }

    for (let j = 0; j <= len2; j++) {
        dp[0][j] = j
    }

    for (let i = 0; i <= len1; i++) {
        dp[i][0] = i
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            // 如果 word1 word2 第 i j 个字符相同，则不用 + 1，否则要 + 1
            let last = dp[i - 1][j - 1]
            if (word1[i - 1] != word2[j - 1]) {
                last += 1
            }

            dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, last)
        }
    }
    
    return dp[len1][len2]
};
```
