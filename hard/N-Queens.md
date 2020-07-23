# [51. N皇后](https://leetcode-cn.com/problems/n-queens/)
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

![img](https://github.com/woai3c/leetcode/blob/master/imgs/8-queens.png)

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:
```
输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
```
## 解法
N 皇后在放置的时候要考虑每个皇后在纵、横、斜线一共 8 个方向上不能同时存在其他皇后。
### 实现一
回溯
```js
/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    const result = []
    const path = [] // 用来放置皇后的数组

    function dfs(row) {
        // 放置完 n 个皇后
        if (row == n) return result.push(path.slice())
        for (let col = 0; col < n; col++) {
            path[row] = col
            // 横、竖、斜三者不能相同，如果有一个相同则跳过
            if (judge(path, row)) continue
            // 不冲突则继续放置下一个皇后
            dfs(row + 1)
        }
    }

    dfs(0)

    return fillChar(result)
};

function fillChar(arr) {
    const result = []
    for (let i = 0, len = arr.length; i < len; i++) {
        const matrix = []
        const data = arr[i]
        for (let row = 0, rows = data.length; row < rows; row++) {
            let str = ''
            for (let col = 0; col < rows; col++) {
                if (col != data[row]) {
                    str += '.'
                } else {
                    str += 'Q'
                }
            }

            matrix.push(str)
        }

        result.push(matrix)
    }
    
    return result
}

function judge(path, curRow) {
    for(let row = 0; row < curRow; row++) {
        // 主对角线 由左上至右下的对角线 同一主对角线上的 row - col 差相同
        // 次对角线 右上至左下的对角线 同一次对角线上的 row + col 和相同
        // 符合以下三个条件之一，则冲突
        // if(
        //     path[row] == path[curRow] 同列
        //     || (row - path[row] == curRow - path[curRow]) 主对角线相同
        //     || (path[row] + row == path[curRow] + curRow) 次对角线相同
        // ) {
        //     return true
        // }

        // 使用下列方法判断冲突更加方便
        // 通过观察可以发现，同一对角线上的每个点，它们的行相减的差值等于列相减的差值
        if(path[row] == path[curRow] || Math.abs(curRow - row) == Math.abs(path[curRow] - path[row])) {
            return true
        }
    }

    return false
}
```
