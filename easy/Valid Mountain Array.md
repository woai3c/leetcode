# 有效的山脉数组

给定一个整数数组 `A`，如果它是有效的山脉数组就返回 `true`，否则返回 `false`。

让我们回顾一下，如果 `A` 满足下述条件，那么它是一个山脉数组：

* `A.length >= 3`
* 在 `0 < i < A.length - 1` 条件下，存在 `i` 使得：
  1. `A[0] < A[1] < ... A[i-1] < A[i]`
  2. `A[i] > A[i+1] > ... > A[B.length - 1]`
 

示例 1：
```
输入：[2,1]
输出：false
```
示例 2：
```
输入：[3,5,5]
输出：false
```
示例 3：
```
输入：[0,3,2,1]
输出：true
``` 

提示：

1. `0 <= A.length <= 10000`
2. `0 <= A[i] <= 10000`

## 实现
```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let len = A.length
    if (len < 3 || A[0] >= A[1]) {
        return false
    } 
    
    let isFirst = false
    for (let i = 1, l = len - 1; i < l; i++) {
        if (!isFirst) {
            if (A[i] > A[i + 1]) {
                isFirst = true
            } 
        } else if (A[i] <= A[i + 1]) {
            return false
        }
    }
    
    return isFirst
};
```
