# [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/robot_maze.png)

例如，上图是一个7 x 3 的网格。有多少可能的路径？

 

示例 1:
```
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
```
示例 2:
```
输入: m = 7, n = 3
输出: 28
```

提示：

* 1 <= m, n <= 100
* 题目数据保证答案小于等于 2 * 10 ^ 9

## 解法
[动态规划](https://leetcode-cn.com/problems/unique-paths/solution/dong-tai-gui-hua-by-powcai-2/)
```js
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const dp = []
    /*
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(0))
    }
    
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }

    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    */

    // 原来按上面代码写的，现在这样写效果和上面的一样
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(1))
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 
        }
    }

    return dp[m - 1][n - 1]
};
```
