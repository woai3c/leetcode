# [77. 组合](https://leetcode-cn.com/problems/combinations/)
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:
```
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```
## 解法
回溯 + 剪枝
```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    
    function backtrace(start, path) {
        if (path.length == k) return result.push(path.slice())
        // 剪枝条件：(n - i + 1) + path.length >= k
        // 表示剩余的数量要满足大于等于 k
        // 例如 n = 5, k = 3
        // 当 n 从 4 开始，已经收集不了 3 个数了
        // 这时就不用收集了 直接结束循环
        for (let i = start; i <= n && (n - i + 1) + path.length >= k; i++) {
            path.push(i)
            backtrace(i + 1, path)
            path.pop()
        }
    }

    backtrace(1, [])
    return result
};
```
