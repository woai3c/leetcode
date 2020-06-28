# [976. 三角形的最大周长](https://leetcode-cn.com/problems/largest-perimeter-triangle/)
给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

如果不能形成任何面积不为零的三角形，返回 0。

 

示例 1：
```
输入：[2,1,2]
输出：5
```

示例 2：
```
输入：[1,2,1]
输出：0
```

示例 3：
```
输入：[3,2,3,4]
输出：10
```

示例 4：
```
输入：[3,6,2,3]
输出：8
```
提示：

* 3 <= A.length <= 10000
* 1 <= A[i] <= 10^6

## 解法
一个合法的三角形必然有 `a + b > c && a + c > b && b + c > a` 等式成立。将数组按升序排列，只要从后往前找，找到的第一个合法的三角形，必定是最大的三角形。

既然是升序的数组，那只要满足 `a + b > c` 这个条件即可找到最大周长的三角形。

如果不能满足这个条件，必然是 c 的值过大，再往前也找不到两个数能比它大的，这时把 c 抛弃即可。直接往上退一个索引，重新匹配。
```js
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    if (!A || !A.length) return 0
    A.sort((a, b) => a - b)
    let result = 0
    for (let i = A.length - 3; i >= 0; i--) {
        if (A[i] + A[i + 1] > A[i + 2]) return A[i] + A[i + 1] + A[i + 2]
    }

    return result
};
```
