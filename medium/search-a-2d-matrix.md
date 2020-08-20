# [74. 搜索二维矩阵](https://leetcode-cn.com/problems/search-a-2d-matrix/)
编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。
示例 1:
```
输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
输出: true
```
示例 2:
```
输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
输出: false
```
## 解法
### 解一
二分查找
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false
    const rows = matrix.length
    const cols = matrix[0].length
    let start = 0
    let end = rows * cols - 1
    while (start <= end) {
        const mid = start + ~~((end - start) / 2)
        const [row, col] = indexToCoordinate(mid, cols)
        if (matrix[row][col] > target) {
            end = mid - 1
        } else if (matrix[row][col] < target) {
            start = mid + 1
        } else {
            return true
        }
    }

    return false
};

function indexToCoordinate(index, cols) {
    return [
        ~~(index / cols),
        index % cols,
    ]
}
```
### 解二
按行查找
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false
    const rows = matrix.length
    const cols = matrix[0].length
    let row = 0
    while (row < rows) {
        if (matrix[row][cols - 1] < target) {
            row++
        } else {
            break
        }
    }

    if (row == rows) return false
    // 这里也可换成二分查找
    for (let col = 0; col < cols; col++) {
        if (matrix[row][col] == target) return true
    }

    return false
};

```
