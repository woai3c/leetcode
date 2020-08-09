# [50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)
实现 pow(x, n) ，即计算 x 的 n 次幂函数。

示例 1:
```
输入: 2.00000, 10
输出: 1024.00000
```
示例 2:
```
输入: 2.10000, 3
输出: 9.26100
```
示例 3:
```
输入: 2.00000, -2
输出: 0.25000
解释: 2-2 = 1/22 = 1/4 = 0.25
```
说明:

* -100.0 < x < 100.0
* n 是 32 位有符号整数，其数值范围是 [−231, 231 − 1] 。

## 解法
### 解一
将 x 不断的和自己进行平方，同时用 count 来计算它相乘的次数，不断的逼近 n。
```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if (n == 0) return 1
    let count = 1
    let temp = x
    let sign = 1
    if (n < 0) {
        sign = -1
        n = -n
    }

    while (count + count <= n) {
        x *= x
        count += count
    }
    
    if (sign == 1) return x * myPow(temp, n - count)
    return 1 / (x * myPow(temp, n - count))
};
```
### 解二
[官方题解](https://leetcode-cn.com/problems/powx-n/solution/powx-n-by-leetcode-solution/)

分治算法，不断的将 n 进行折半计算。
```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    return n >= 0? mul(x, n) : 1 / mul(x, n)
};

function mul(x, n) {
    if (n == 0) return 1
    const y = mul(x, ~~(n / 2))
    return n % 2? y * y * x : y * y
}
```
