# [29. 两数相除](https://leetcode-cn.com/problems/divide-two-integers/)
给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

 

示例 1:
```
输入: dividend = 10, divisor = 3
输出: 3
解释: 10/3 = truncate(3.33333..) = truncate(3) = 3
```
示例 2:
```
输入: dividend = 7, divisor = -3
输出: -2
解释: 7/-3 = truncate(-2.33333..) = -2
```

提示：

* 被除数和除数均为 32 位有符号整数。
* 除数不为 0。
* 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

## 解法
```js
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend == divisor) return 1
    if (divisor == 1) return dividend
    // 处理溢出
    if (divisor == -1) {
        if(dividend > (-2) ** 31) return -dividend
        return 2 ** 31 - 1
    }

    const result = div(Math.abs(dividend), Math.abs(divisor))
    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
        // 处理溢出
        if (result > 2 ** 31 - 1) return 2 ** 31 - 1
        return result
    }

    return -result
};

function div(a, b) {
    if (a < b) return 0
    let b2 = b
    let count = 1
    // 不断的将除数翻倍，逼近所能达到的最大倍数
    while (b2 + b2 <= a) {
        count += count
        b2 += b2
    }
    
    // 减去当前最大倍数的除数，继续处理差值
    return count + div(a - b2, b)
}
```
