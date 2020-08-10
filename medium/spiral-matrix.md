# [54. 螺旋矩阵](https://leetcode-cn.com/problems/spiral-matrix/)
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:
```
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
```
示例 2:
```
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
```
## 解法
用 up down left right 代表四个方向的边界。

每一行或一列使用后，需要将其进行删除操作，即对边界条件进行增减操作。

每操作一次后，需要对边界条件进行判断，如果有两条边界交错，就结束循环。
```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) return []
    const result = []
    // 定义上下左右四个边界
    let up = 0
    let down = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    
    while (true) {
        // left to right
        for (let i = left; i <= right; i++) result.push(matrix[up][i])
        if (++up > down) break

        // up to down
        for (let i = up; i <= down; i++) result.push(matrix[i][right])
        if (--right < left) break

        // right to left
        for (let i = right; i >= left; i--) result.push(matrix[down][i])
        if (--down < up) break

        // down to up
        for (let i = down; i >= up; i--) result.push(matrix[i][left])
        if (++left > right) break
    }

    return result
};
```
