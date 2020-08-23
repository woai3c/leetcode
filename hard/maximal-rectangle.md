# [85. 最大矩形](https://leetcode-cn.com/problems/maximal-rectangle/)
给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:
```
输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6
```
## 解法
所有解法均来自于[官方题解](https://leetcode-cn.com/problems/maximal-rectangle/solution/zui-da-ju-xing-by-leetcode/)
### 解一
```js
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0
    const rows = matrix.length
    const cols = matrix[0].length
    const dp = []
    for (let i = 0; i < rows; i++) {
        dp.push(new Array(cols))
    }

    let max = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 1) {
                dp[i][j] = j > 0? dp[i][j - 1] + 1 : 1
            } else {
                dp[i][j] = 0
            }

            let width = dp[i][j]
            for (let k = i; k >= 0; k--) {
                width = Math.min(width, dp[k][j])
                max = Math.max(max, (i - k + 1) * width)
            }
        }
    }

    return max
};
```
### 解二
```js
/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0
    const rows = matrix.length
    const cols = matrix[0].length
    const dp = new Array(cols).fill(0)

    let max = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 1) {
                dp[j]++
            } else {
                dp[j] = 0
            }
        }

        max = largestRectangleArea(dp, max)
    }

    return max
};

// leetcode 84 题解法
/**
 * @param {number[]} heights
 * @return {number}
 */
 var largestRectangleArea = function(heights, max) {
    if (!heights.length) return 0
    heights = [0, ...heights, 0]
    const stack = []
    let top = -1 // 栈顶索引
    for (let i = 0, len = heights.length; i < len; i++) {
        while (stack.length && heights[stack[top]] > heights[i]) {
            const index = stack.pop()
            top--
            max = Math.max(max, (i - stack[top] - 1) * heights[index])
        }

        stack.push(i)
        top++
    }
    
    return max
};
```
