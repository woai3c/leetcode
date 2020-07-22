# [289. 生命游戏](https://leetcode-cn.com/problems/game-of-life/)
根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

* 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
* 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
* 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
* 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

根据当前状态，写一个函数来计算面板上所有细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。

 

示例：
```
输入： 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
输出：
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
```

进阶：

* 你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
* 本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？

## 解法
### 实现一
按照题意直解
```js
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const copy = []
    const rows = board.length
    const cols = board[0].length
    // 建立一个复制数组，判断状态时用
    // 修改值则直接在原数组上修改
    for (let row = 0; row < rows; row++) {
        copy[row] = []
        for (let col = 0; col < cols; col++) {
            copy[row][col] = board[row][col]
        }
    }

    const neighbors = [-1, 0, 1]
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let alive = 0
            // 以每个细胞为中心，遍历它周围 8 个细胞
            for (let i = 0; i < 3; i++) {
                const r = row + neighbors[i]
                for (let j = 0; j < 3; j++) {
                    const c = col + neighbors[j]
                    // 判断边界条件
                    if (r >= 0 && c >= 0 && r < rows && c < cols && !(r == row && c == col)) {
                        alive += copy[r][c]
                    }
                }
            }

            // 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡
            // 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡
            if (copy[row][col] && (alive < 2 || alive > 3)) {
                board[row][col] = 0
            }
            
            // 如果死细胞周围正好有三个活细胞，则该位置死细胞复活
            if (!copy[row][col] && alive == 3) {
                board[row][col] = 1
            }
        }
    }
};
```
### 实现二
实现二和实现一的思路差不多，只不过不复制数组，改用状态来代替。

原来细胞的状态有 0 和 1，0 代表死亡，1 代表生存。现在新增两个状态，-1 代表原来是活的，现在是死的；2 代表原来是死的，现在是活的。

这样在判断状态时，如果细胞是 -1 或 1，就需要对 alive 进行加 1。而其他情况不用加，当计算完整个矩阵后，最后再把 2 和 -1 恢复成 1 和 0。
```js
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    const rows = board.length
    const cols = board[0].length
    const neighbors = [-1, 0, 1]
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let alive = 0
            // 以每个细胞为中心，遍历它周围 8 个细胞
            for (let i = 0; i < 3; i++) {
                const r = row + neighbors[i]
                for (let j = 0; j < 3; j++) {
                    const c = col + neighbors[j]
                    // 判断边界条件，-1 也算符合条件，因为它原来是活的
                    if (
                        r >= 0 && c >= 0 && r < rows && c < cols 
                        && !(r == row && c == col) && Math.abs(board[r][c]) == 1
                    ) {
                        alive += 1
                    }
                }
            }

            // 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡
            // 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡
            if (board[row][col] == 1 && (alive < 2 || alive > 3)) {
                // 原来是活的，现在是死的，用 -1 代替
                board[row][col] = -1
            }
            
            // 如果死细胞周围正好有三个活细胞，则该位置死细胞复活
            if (board[row][col] == 0 && alive == 3) {
                // 原来是死的，现在是活的，用 2 代替
                board[row][col] = 2
            }
        }
    }
    
    // 将 2 和 -1 替换回 1 和 0
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] == -1) {
                board[row][col] = 0
            } else if (board[row][col] == 2) {
                board[row][col] = 1
            }
        }
    }
};
```




