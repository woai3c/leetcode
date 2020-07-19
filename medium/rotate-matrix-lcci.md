# [面试题 01.07. 旋转矩阵](https://leetcode-cn.com/problems/rotate-matrix-lcci/)
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？

 
示例 1:
```
给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```
示例 2:
```
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```
## 解法
[官方题解](https://leetcode-cn.com/problems/rotate-matrix-lcci/solution/xuan-zhuan-ju-zhen-by-leetcode-solution/)
```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const rows = matrix.length
    const result = []
    for (let i = 0; i < rows; i++) {
        result.push([])
    }
    
    let lastIndex = rows -1
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < rows; col++) {
            result[col][lastIndex - row] = matrix[row][col]
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < rows; col++) {
            matrix[row][col] = result[row][col]
        }
    }
};
```
```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const rows = matrix.length
    let lastIndex = rows - 1
    for (let row = 0, half = Math.floor(rows / 2); row < half; row++) {
        for (let col = 0, half2 = Math.floor((rows + 1) / 2); col < half2; col++) {
            let temp = matrix[row][col]
            matrix[row][col] = matrix[lastIndex - col][row]
            matrix[lastIndex - col][row] = matrix[lastIndex - row][lastIndex - col]
            matrix[lastIndex - row][lastIndex - col] = matrix[col][lastIndex - row]
            matrix[col][lastIndex - row] = temp
        }
    }
};
```
```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const rows = matrix.length
    const lastIndex = rows - 1
    for (let row = 0, half = Math.floor(rows / 2); row < half; row++) {
        for (let col = 0; col < rows; col++) {
            const temp = matrix[row][col]
            matrix[row][col] = matrix[lastIndex - row][col]
            matrix[lastIndex - row][col] = temp
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < row; col++) {
            const temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp
        }
    }
};
```
