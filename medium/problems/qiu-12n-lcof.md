# [剑指 Offer 64. 求1+2+…+n](https://leetcode-cn.com/problems/qiu-12n-lcof/)
求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

示例 1：
```
输入: n = 3
输出: 6
```
示例 2：
```
输入: n = 9
输出: 45
```

限制：

* 1 <= n <= 10000

## 解法
### 实现一
递归加法
```js
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    return n && n + sumNums(n - 1)
};
```
### 实现二
[官方题解：快速乘](https://leetcode-cn.com/problems/qiu-12n-lcof/solution/qiu-12n-by-leetcode-solution/)

利用位运算
```js
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
    let m = n + 1
    let result = 0
    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    ;(m & 1) && (result += n)
    m >>= 1
    n <<= 1

    return result >> 1
};
```
