# 面试题 08.01. 三步问题

三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

示例1:
```
 输入：n = 3 
 输出：4
 说明: 有四种走法
```
示例2:
```
 输入：n = 5
 输出：13
```
提示:

* n范围在[1, 1000000]之间

### 实现
斐波那契数列，只不过由 2 个数变成了 3 个数。同样的解法，有两种实现方式。
```js
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    if (!n) return n
    if (n == 1) return 1
    if (n == 2) return 2
    if (n == 3) return 4
    let pre1 = 4
    let pre2 = 2
    let pre3 = 1
    let result
    for (let i = 4; i <= n; i++) {
        result = (pre1 + pre2 + pre3) % 1000000007
        pre3 = pre2
        pre2 = pre1
        pre1 = result
    }

    return result
};
// 1 2 4 7 13 24
```
```js
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    if (!n) return n
    const result = [0, 1, 2, 4]
    for (let i = 4; i <= n; i++) {
        result[i] = (result[i - 1] + result[i - 2] + result[i - 3]) % 1000000007
    }

    return result[n]
};
// 1 2 4 7 13 24
```
