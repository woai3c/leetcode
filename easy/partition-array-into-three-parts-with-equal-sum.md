# [1013. 将数组分成和相等的三个部分](https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/)
给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果可以找出索引 i+1 < j 且满足 A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1] 就可以将数组三等分。

示例 1：
```
输入：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
```
示例 2：
```
输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
```
示例 3：
```
输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
```

提示：

* 3 <= A.length <= 50000
* -10^4 <= A[i] <= 10^4

## 解法
如果数组是由三个和相等的部分组成的，那将整个数组相加，取得数组的和，再除以 3，就能得到每部分的和 `sum` 了。
这样就可以再遍历一次数组，将每个数相加，统计等于 `sum` 的次数是否等于 3。
```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    if (!A.length) return false
    let sum = 0
    for (let i = 0, len = A.length; i < len; i++) {
        sum += A[i]
    }

    const threshold = sum? sum / 3 : sum
    let count = 0
    sum = 0
    for (let i = 0, len = A.length; i < len; i++) {
        sum += A[i]
        if (sum == threshold) {
            sum = 0
            count++
        }
    }

    return count == 3 || (count > 3 && threshold == 0)
};
```
