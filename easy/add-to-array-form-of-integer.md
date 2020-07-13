# [989. 数组形式的整数加法](https://leetcode-cn.com/problems/add-to-array-form-of-integer/)
对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。

给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。

示例 1：
```
输入：A = [1,2,0,0], K = 34
输出：[1,2,3,4]
解释：1200 + 34 = 1234
```
示例 2：
```
输入：A = [2,7,4], K = 181
输出：[4,5,5]
解释：274 + 181 = 455
```
示例 3：
```
输入：A = [2,1,5], K = 806
输出：[1,0,2,1]
解释：215 + 806 = 1021
```
示例 4：
```
输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
输出：[1,0,0,0,0,0,0,0,0,0,0]
解释：9999999999 + 1 = 10000000000
```

提示：

* 1 <= A.length <= 10000
* 0 <= A[i] <= 9
* 0 <= K <= 10000
* 如果 A.length > 1，那么 A[0] != 0

## 解法
将 K 转为字符串，然后倒序遍历 A，K。每次将相同索引的值相加，用取模得到要推入结果中的值，用除法得到进位。
如果有 A 或 K 遍历完了，另一个没有遍历完，仍可继续遍历，只要将值为 undefined 置为 0 即可，用 ~~ 操作取整。
```js
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    K += ''
    let carry = 0
    let i = A.length - 1
    let j = K.length - 1
    const result = []
    while (i >= 0 || j >= 0) {
        const sum = ~~A[i--] + ~~Number(K[j--]) + carry
        carry = Math.floor(sum / 10)
        result.push(sum % 10)
    }

    if (carry) result.push(carry)
    return result.reverse()
};
```