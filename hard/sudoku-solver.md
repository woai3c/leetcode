# [37. 解数独](https://leetcode-cn.com/problems/sudoku-solver/)
编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

* 数字 1-9 在每一行只能出现一次。
* 数字 1-9 在每一列只能出现一次。
* 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

空白格用 '.' 表示。

![](http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

一个数独。

![](http://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png)

答案被标成红色。

Note:

* 给定的数独序列只包含数字 1-9 和字符 '.' 。
* 你可以假设给定的数独只有唯一解。
* 给定数独永远是 9x9 形式的。

## 解法
回溯
```js
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
    const rows = []
    const cols = []
    const boxes = []
    // 初始化二维数组
    for (let i = 0; i < 9; i++) {
        rows.push(new Array(10).fill(false))
        cols.push(new Array(10).fill(false))
        boxes.push(new Array(10).fill(false))
    }

    // 将已有数字的格子设为 true
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j]
            const box = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if (val != '.') {
                rows[i][val] = true
                cols[j][val] = true
                boxes[box][val] = true
            }
        }
    }

    // 是否找到解
    let isDone = false
    function backtrack(i, j) {
        if (board[i][j] == '.') {
            const box = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            for (let k = 1; k <= 9; k++) {
                if (rows[i][k] || cols[j][k] || boxes[box][k]) continue
                rows[i][k] = true
                cols[j][k] = true
                boxes[box][k] = true
                board[i][j] = k + ''
                if (i == 8 && j == 8) {
                    isDone = true
                    return
                }
                
                // 下一个数字
                if (j < 8) {
                    backtrack(i, j + 1)
                } else {
                    backtrack(i + 1, 0)
                }

                // 回溯需要判断是否已经完成，如果没有完成才将数字清零，重新执行
                if (!isDone) {
                    rows[i][k] = false
                    cols[j][k] = false
                    boxes[box][k] = false
                    board[i][j] = '.'
                }
            }
        } else {
            if (i == 8 && j == 8) {
                isDone = true
                return
            }

            if (j < 8) {
                backtrack(i, j + 1)
            } else {
                backtrack(i + 1, 0)
            }
        }
    }

    backtrack(0, 0)
};
```
