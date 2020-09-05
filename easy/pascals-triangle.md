# [118. 杨辉三角](https://leetcode-cn.com/problems/pascals-triangle/)
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:
```
输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```
## 解法
```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows == 0) return []
    if (numRows == 1) return [[1]]
    const result = [[1], [1, 1]]
    for (let i = 2; i < numRows; i++) {
        const arr = [1]
        const preArr = result[i - 1]
        for (let j = 1, l = preArr.length; j < l; j++) {
            arr.push(preArr[j - 1] + preArr[j])
        }

        arr.push(1)
        result.push(arr)
    }

    return result
};
```
