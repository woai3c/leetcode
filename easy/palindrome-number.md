# [9. 回文数](https://leetcode-cn.com/problems/palindrome-number/)
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:
```
输入: 121
输出: true
```
示例 2:
```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```
示例 3:
```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```
进阶:

你能不将整数转为字符串来解决这个问题吗？
## 解法
### 解一
```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    x += ''
    for (let i = 0, j = x.length - 1, len = x.length / 2; i < len; i++, j--) {
        if (x[i] != x[j]) return false
    }

    return true
};
```

### 解二
取数字另一半进行对折，再和原数字进行对比。
```
2112 会将 12 转变为 21
```
奇数要对反转后的数字除以 10，例如
```
11211 会将 211 转为 112，这里要对 112 除以 10
```

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false
    let right = 0
    while (x > right) {
        right = right * 10 + x % 10
        x = Math.floor(x / 10)
    }

    return x == right || x == Math.floor(right / 10)
};
```
