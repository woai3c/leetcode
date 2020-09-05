# [119. 杨辉三角 II](https://leetcode-cn.com/problems/pascals-triangle-ii/)
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:
```
输入: 3
输出: [1,3,3,1]
```
进阶：

* 你可以优化你的算法到 O(k) 空间复杂度吗？
## 解法
```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [1]
    for (let i = 1; i <= rowIndex; i++) {
        let preVal = 1 // 保存上一索引的值
        let curVal = 1 // 保存当前索引的值
        for (let j = 1, l = result.length; j < l; j++) {
            // 先将当前值保存起来
            // 再将当前值和上一个值相加
            // 然后进入到下一循环时，当前值就变成了上一个值
            curVal = result[j]
            result[j] += preVal
            preVal = curVal
        }
        // 最后再补上一个 1
        result.push(1)
    }

    return result
};
```
