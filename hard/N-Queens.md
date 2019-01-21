# N皇后
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
## JavaScript实现
```
let arry = []
let s

function test(row, col){
	let i = 0
	while (i < row) {
		if(arry[i] == col || Math.abs(row - i) == Math.abs(arry[i] - col)) {
            return false
        }
		i++				 
	}
	return true
}
 
function getQueenNum(row, n) {
	let col
	if(row < n) {
		for(col = 0; col < n; col++) {
            if(test(row, col)) {
				arry[row] = col		
				getQueenNum(row + 1, n)	 
			}
        }	
	} else {
        s.push(arry.slice())
	}
}

function n2s(arry, n) {
    const result = []
    const dotArry = []
    while (n--) {
        dotArry.push('.')
    }
    
    for (let i = 0, len = arry.length; i < len; i++) {
        let iArry = []
        let tempIarry = arry[i]
        for (let j = 0, jlen = tempIarry.length; j < jlen; j++) {
            let tempDot = dotArry.slice()
            tempDot[tempIarry[j]] = 'Q'
            iArry.push(tempDot.join(''))
        }
        result.push(iArry)
    }

    return result
}

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if (n == 1) {
        return [['Q']]
    }
    s = []
    getQueenNum(0, n)
    return n2s(s, n)
};
```
