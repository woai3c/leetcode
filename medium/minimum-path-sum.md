# [64. 最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:
```
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```
## 解法
动态规划
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const dp = []
    const rows = grid.length
    const cols = grid[0].length
    for (let i = 0; i < rows; i++) {
        dp.push([])
    }
    
    dp[0][0] = grid[0][0]
    for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    }

    for (let j = 1; j < cols; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j]
        }
    }

    return dp[rows - 1][cols - 1]
};
```
