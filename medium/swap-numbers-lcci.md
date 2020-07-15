# [面试题 16.01. 交换数字](https://leetcode-cn.com/problems/swap-numbers-lcci/)
编写一个函数，不用临时变量，直接交换numbers = [a, b]中a与b的值。

示例：
```
输入: numbers = [1,2]
输出: [2,1]
```
提示：

* numbers.length == 2
## 解法
利用交换律
```js
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {
    numbers[0] = numbers[0] + numbers[1]
    numbers[1] = numbers[0] - numbers[1]
    numbers[0] = numbers[0] - numbers[1]
    return numbers
};
```
```js
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {
    numbers[0] = numbers[0] - numbers[1]
    numbers[1] = numbers[0] + numbers[1]
    numbers[0] = numbers[1] - numbers[0]
    return numbers
};
```
```js
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
var swapNumbers = function(numbers) {
    numbers[0] = numbers[0] ^ numbers[1]
    numbers[1] = numbers[1] ^ numbers[0]
    numbers[0] = numbers[0] ^ numbers[1]
    return numbers
};
```
