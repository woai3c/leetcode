n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

![img](https://github.com/woai3c/leetcode/blob/master/imgs/8-queens.png)

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回 n 皇后不同的解决方案的数量。

示例:

输入: 4
输出: 2
解释: 4 皇后问题存在如下两个不同的解法。
```
[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
```

## JavaScript实现
#### 实现1
思路:https://blog.csdn.net/The_star_is_at/article/details/80323066
```
let count

function getQueenNums(row, ld, rd, upperlim) {
    if (row != upperlim) {  
        let pos = upperlim & (~(row | ld | rd))
        
        while (pos) {  
            let p = pos & -pos
            pos -= p
            getQueenNums(row | p, (ld | p) << 1, (rd | p) >> 1, upperlim)
        }  
    }  
    else {
        count++
    } 
}

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let upperlim = (1 << n) - 1
    count = 0
    getQueenNums(0, 0, 0, upperlim)
    
    return count
};

```

#### 实现2
思路：https://blog.csdn.net/you_will_know_me/article/details/78419088

实现1和实现2其实是一样的，只不过一个用数组作比较一个用位作比较。
```
let count
let arry = []

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
		count++
	}
}

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    count = 0
    getQueenNum(0, n)
    return count
};
```
