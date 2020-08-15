# [63. 不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/robot_maze.png)

网格中的障碍物和空位置分别用 1 和 0 来表示。

说明：m 和 n 的值均不超过 100。

示例 1:
```
输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```
## 解法
[动态规划](https://leetcode-cn.com/problems/unique-paths-ii/solution/dong-tai-gui-hua-by-wo-ai-xiao-zhe-li/)
```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rows = obstacleGrid.length
    const cols = obstacleGrid[0].length
    if (rows == 1) {
        if (obstacleGrid[0].includes(1)) return 0
        return 1
    }

    const dp = []
    for (let i = 0; i < rows; i++) {
        dp.push(new Array(cols).fill(0))
    }

    let hasObstacle = false
    for (let i = 0; i < rows; i++) {
        if (hasObstacle) {
            dp[i][0] = 0
        } else {
            if (obstacleGrid[i][0]) {
                dp[i][0] = 0
                hasObstacle = true
            } else {
                dp[i][0] = 1
            }
        }
    }

    hasObstacle = false
    for (let i = 0; i < cols; i++) {
        if (hasObstacle) {
            dp[0][i] = 0
        } else {
            if (obstacleGrid[0][i]) {
                dp[0][i] = 0
                hasObstacle = true
            } else {
                dp[0][i] = 1
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (obstacleGrid[i][j]) {
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
            }
        }
    }

    return dp[rows - 1][cols - 1]
};
```
