# [367. 有效的完全平方数](https://leetcode-cn.com/problems/valid-perfect-square/)
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：
```
输入：16
输出：True
```
示例 2：
```
输入：14
输出：False
```

## 解法
暴力和二分查找，还有一个牛顿迭代法，不好记，没写。
```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return true
    for (let i = 2, len = Math.floor(num / 2); i <= len; i++) {
        if (i * i == num) return true
    }

    return false
};
```
```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) return true
    let start = 2
    let end = Math.floor(num / 2)
    let mid
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2)
        const square = mid * mid
        if (square < num) {
            start = mid + 1
        } else if (square > num) {
            end = mid - 1
        } else {
            return true
        }
    }

    return false
};
```
