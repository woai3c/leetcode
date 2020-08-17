# [73. 矩阵置零](https://leetcode-cn.com/problems/set-matrix-zeroes/)
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:
```
输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```
示例 2:
```
输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```
进阶:

* 一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
* 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
* 你能想出一个常数空间的解决方案吗？

## 解法
### 解一
遇到 0 时，将它对应的行列，先替换为 'x'。等遍历完了，再把 'x' 转换为 0。
```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 0) {
                fillChar(matrix, i, j, rows, cols, 'x')
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 'x') {
                matrix[i][j] = 0
            }
        }
    }
};

function fillChar(matrix, i, j, rows, cols, c) {
    for (let k = 0; k < cols; k++) {
        if (matrix[i][k] != 0) matrix[i][k] = c
    }

    for (let k = 0; k < rows; k++) {
        if (matrix[k][j] != 0) matrix[k][j] = c
    }
}
```
### 解二
解一效率比较低，现在遇到 0，改成将它对应的行和列的第一个数字设为 0。

假设 `matrix[i][j] = 0`，则它的行和列对应的第一个数字必定已经遍历过，现在将它们设为 0。

等后面再将它对应的整行整列设为 0，可以提升效率。
```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    let needSetFirstColZero = false
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] == 0) {
            needSetFirstColZero = true
        }

        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }
    }
    // matrix[0][0] = 0 只有第一行中有 0，它才会为 0
    // 因为每次遍历是从列索引 1 开始的
    // 所以需要将第一行都设为 0
    if (matrix[0][0] == 0) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0
        }
    }
    // 如果第一列中有一个为 0，则第一列都为 0
    // 请看上面第一个 for 循环代码的逻辑
    if (needSetFirstColZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0
        }
    }
};
```
