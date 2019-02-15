# 矩阵中的幻方
3 x 3 的幻方是一个填充有**从 1 到 9**的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。

给定一个由整数组成的 N × N 矩阵，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。

 

示例 1:
```
输入: [[4,3,8,4],
      [9,5,1,9],
      [2,7,6,2]]
输出: 1
解释: 
下面的子矩阵是一个 3 x 3 的幻方：
438
951
276

而这一个不是：
384
519
762

总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
```
提示:

1. `1 <= grid.length = grid[0].length <= 10`
2. `0 <= grid[i][j] <= 15`

## 实现
```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let count = 0
    let l = grid[0].length - 2
    for (let i = 0, len = grid.length - 2; i < len; i++) {
        const g1 = grid[i]
        const g2 = grid[i + 1]
        const g3 = grid[i + 2]
        
        for (let j = 0; j < l; j++) {
            // 中间必须为5
            if (g2[j + 1] == 5) {
                let last = j + 3
                const arry1 = g1.slice(j, last)
                const arry2 = g2.slice(j, last)
                const arry3 = g3.slice(j, last)
                const set = new Set(arry1.concat(arry2).concat(arry3))

                if (set.size == 9 && isSubmatrix(arry1, arry2, arry3)) {
                    count++
                }
            }
        }
    }

    return count
};

function isSubmatrix(arry1, arry2, arry3) {
    const [g1v1, g1v2, g1v3] = arry1
    const [g2v1, g2v2, g2v3] = arry2
    const [g3v1, g3v2, g3v3] = arry3
    if (Math.max(g1v1, g1v2, g1v3, g2v1, g2v2, g2v3, g3v1, g3v2, g3v3) > 9) {
        return false
    }
    if (Math.min(g1v1, g1v2, g1v3, g2v1, g2v2, g2v3, g3v1, g3v2, g3v3) < 1) {
        return false
    }
    
    if (g1v1 + g1v2 + g1v3 != 15) {
        return false
    }

    if (g1v1 + g2v1 + g3v1 != 15) {
        return false
    }
    
    if (g1v1 + g3v3 != 10 || g1v3 + g3v1 != 10) {
        return false
    }

    return true
}
```
