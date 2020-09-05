# [120. 三角形最小路径和](https://leetcode-cn.com/problems/triangle/)
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

 

例如，给定三角形：
```
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
```
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

 

说明：

* 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
## 解法
[官方题解](https://leetcode-cn.com/problems/triangle/solution/san-jiao-xing-zui-xiao-lu-jing-he-by-leetcode-solu/)
动态规则+二维数组

用 dp[i][j] 表示第 i 行第 j 列的最小路径。
```js
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = []
    for (let i = 0; i < triangle.length; i++) {
        dp.push(new Array(triangle[i].length))
    }

    dp[0][0] = triangle[0][0]
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j == 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
            } else if (i == j) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
            }
        }
    }
  
    // 从当前行中找出最小路径值
    return Math.min(...dp[triangle.length - 1])
};
```
由于每次只需要知道上一层的最小路径，所以可以进行优化，将 dp 变成一维数组。
```js
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = []
    dp[0] = triangle[0][0]
    // pre cur 都是保存着上一层 dp 的结果
    // pre 对应上一层 dp[j - 1]
    // cur 对应上一层的 dp[j]
    let pre, cur
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            cur = dp[j]
            if (j == 0) {
                dp[j] = cur + triangle[i][j]
            } else if (i == j) {
                dp[j] = pre + triangle[i][j]
            } else {
                dp[j] = Math.min(pre, cur) + triangle[i][j]
            }

            pre = cur
        }
    }

    // 从当前层找最小值
    return Math.min(...dp)
};
```
