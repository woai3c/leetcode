# [59. 螺旋矩阵 II](https://leetcode-cn.com/problems/spiral-matrix-ii/)
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:
```
输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```
## 解法
没有特别的解题技巧，就是按回字形、顺时针地往里填充数据。
```js
/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    const result = []
    for (let i = 0; i < n; i++) {
        result[i] = []
    }

    let row = 0
    let col = 0
    let len = n
    let i = 1
    const square = n * n
    while (i <= square) {
        for (let j = col; j < len && i <= square; j++, i++) {
            result[row][j] = i
        }
        
        for (let j = row + 1; j < len && i <= square; j++, i++) {
            result[j][n - col - 1] = i
        }
        
        for (let j = n - col - 2; j >= col && i <= square; j--, i++) {
            result[n - row - 1][j] = i
        }
        
        for (let j = n - row - 2; j > row && i <= square; j--, i++) {
            result[j][col] = i
        }
        
        len--
        row++
        col++
    }
    
    return result
};
```
