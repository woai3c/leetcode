# [22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例：
```
输入：n = 3
输出：[
 "((()))",
 "(()())",
 "(())()",
 "()(())",
 "()()()"
]
```
## 解法
回溯算法，有一点要提一下：当左右两边的括号相等时，下一个括号只能是左括号。
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []

    function dfs(path, left, right) {
        if (left == 0 && right == 0) return result.push(path)
        if (left) {
            dfs(path + '(', left - 1, right)
        }

        if (right && left != right) {
            dfs(path + ')', left, right - 1)
        }
    }

    dfs('', n, n)
    return result
};
```
