# [面试题 08.09. 括号](https://leetcode-cn.com/problems/bracket-lcci/)
括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。

说明：解集不能包含重复的子集。

例如，给出 n = 3，生成结果为：
```
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
```
## 解法
递归回溯
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (!n) return []
    const result = []
    dfs(n, n, '', result)
    return result
};

function dfs(left, right, path, result) {
    if (left == 0 && right == 0) return result.push(path)
    if (left > 0) {
        dfs(left - 1, right, path + '(', result)
    }
    
    if (right > 0 && right > left) {
        dfs(left, right - 1, path + ')', result)
    }
}
```
