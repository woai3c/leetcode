# [66. 加一](https://leetcode-cn.com/problems/plus-one/)
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:
```
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```
示例 2:
```
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```
## 解法
### 解一
竖形加法
```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10
        // 不等于 0，代替没进位
        if (digits[i] != 0) return digits
    }

    digits.unshift(1)
    return digits
};
```
### 解二
利用内置 BigInt 库
```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return ((BigInt(digits.join('')) + 1n) + '').split('').map(c => Number(c))
};
```
