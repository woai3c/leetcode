# [338. 比特位计数](https://leetcode-cn.com/problems/counting-bits/)
给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

示例 1:
```
输入: 2
输出: [0,1,1]
```
示例 2:
```
输入: 5
输出: [0,1,1,2,1,2]
```
进阶:

* 给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
* 要求算法的空间复杂度为O(n)。
* 你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。

## 解法
[官方题解](https://leetcode-cn.com/problems/counting-bits/solution/bi-te-wei-ji-shu-by-leetcode/)
### 实现1
```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if (!num) return [0]
    const result = []
    for (let i = 0; i <= num; i++) {
        result[i] = i.toString(2).split('1').length - 1
    }

    return result
};
```
### 实现2
将 n 和 n−1 做与运算，会把最后一个 1 的位变成 0
```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if (!num) return [0]
    const result = []
    for (let i = 0; i <= num; i++) {
        result[i] = getOneCount(i)
    }

    return result
};

function getOneCount(x) {
    let count
    for (count = 0; x != 0; count++) {
        x &= x - 1
    }

    return count
}
```
### 实现3——动态规划 + 最低有效位
```js
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if (!num) return [0]
    const result = [0]
    for (let i = 1; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1)
    }

    return result
};
```
