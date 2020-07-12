# [1346. 检查整数及其两倍数是否存在](https://leetcode-cn.com/problems/check-if-n-and-its-double-exist/)
给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。

更正式地，检查是否存在两个下标 i 和 j 满足：

* i != j
* 0 <= i, j < arr.length
* arr[i] == 2 * arr[j]
 

示例 1：
```
输入：arr = [10,2,5,3]
输出：true
解释：N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。
```
示例 2：
```
输入：arr = [7,1,14,11]
输出：true
解释：N = 14 是 M = 7 的两倍，即 14 = 2 * 7 。
```
示例 3：
```
输入：arr = [3,1,7,11]
输出：false
解释：在该情况下不存在 N 和 M 满足 N = 2 * M 。
```
提示：

* 2 <= arr.length <= 500
* -10^3 <= arr[i] <= 10^3
## 解法
### 实现一
先排序，再倒序遍历数组，同时用哈希缓存当前值。每次遍历时看看 `arr[i]*2` 是否在哈希表中。
```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const hash = {}
    arr.sort((a, b) => a - b)
    for (let i = arr.length - 1; i >= 0; i--) {
        const val = arr[i]
        if (val >= 0 && hash[val * 2]) return true
        if (val < 0 && hash[val / 2]) return true
        hash[val] = true
    }

    return false
};
```
### 实现二
双指针，先排序，再分别正序、倒序遍历一次。正序是为了正整数，倒序是为了防止有负数。

如果是正数的情况下，指针 j 大于 `arr[i]*2`，直接结束循环，j 值不动，接着往后遍历。因为随着 i 递增，`arr[i]*2` 也会递增。

负数的情况刚好相反。
```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    arr.sort((a, b) => a - b)
    let j = 0
    len = arr.length
    for (let i = 0; i < len; i++) {
        const val = arr[i] * 2
        while (j < len) {
            if (arr[j] == val && i != j) return true
            if (arr[j] > val) break
            j++
        }
    }

    j = len - 1
    for (let i = len - 1; i >= 0; i--) {
        const val = arr[i] / 2
        while (j >= 0) {
            if (arr[j] == val && i != j) return true
            if (arr[j] < val) break
            j--
        }
    }

    return false
};
```
