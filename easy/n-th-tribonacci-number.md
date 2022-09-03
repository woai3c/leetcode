# [1137. 第 N 个泰波那契数](https://leetcode.cn/problems/n-th-tribonacci-number/)
泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

示例 1：
```
输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```
示例 2：
```
输入：n = 25
输出：1389537
```

提示：

* 0 <= n <= 37
* 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。

## 答案
```js
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const dp = [0, 1, 1]

    function helper(n) {
        if (dp[n] !== undefined) return dp[n]

        dp[n] = helper(n - 1) + helper(n - 2) + helper(n - 3)
        return dp[n]
    }
    
    return helper(n)
};
```
优化一下
```js
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (!n) return 0
    if (n < 3) return 1

    let a = 0, b = 1, c = 1, d = 2
    for (let i = 3; i <= n; i++) {
        d = a + b + c
        // 三个值顺移
        a = b
        b = c
        c = d
    }
    
    return d
};
```
