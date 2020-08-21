# [79. 单词搜索](https://leetcode-cn.com/problems/word-search/)
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例:
```
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false
```

提示：

* board 和 word 中只包含大写和小写英文字母。
* 1 <= board.length <= 200
* 1 <= board[i].length <= 200
* 1 <= word.length <= 10^3
## 解法
回溯
```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length
    // 记录二维数组已经使用过的数
    const used = []
    // 二维数组的四个方向
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (let i = 0; i < rows; i++) {
        used.push(new Array(cols).fill(false))
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == word[0]) {
                used[i][j] = true
                if (backtrace(i, j, 1)) return true
                used[i][j] = false
            }
        }
    }

    function backtrace(row, col, len) {
        if (len == word.length) return true
        for (const d of direction) {
            const r = row + d[0]
            const c = col + d[1]
            if (r < 0 || c < 0 || r == rows || c == cols || used[r][c]) continue
            if (board[r][c] == word[len]) {
                used[r][c] = true
                if (backtrace(r, c, len + 1)) return true
                used[r][c] = false
            }
        }
    }

    return false
};
```
