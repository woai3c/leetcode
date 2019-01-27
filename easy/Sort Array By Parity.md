# 按奇偶排序数组
给定一个非负整数数组 A，返回一个由 A 的所有偶数元素组成的数组，后面跟 A 的所有奇数元素。

你可以返回满足此条件的任何数组作为答案。

 

示例：
```
输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
```

提示：

1. `1 <= A.length <= 5000`
2. `0 <= A[i] <= 5000`

## JavaScript实现
####  实现1
```
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return A.filter(e => !(e & 1) ).concat(A.filter(e => e & 1))
};
```
#### 实现2
```
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const even = []
    const odd = []
    
    for (let i = 0, len = A.length; i < len; i++) {
        let temp = A[i]
        temp & 1? odd.push(temp) : even.push(temp)
    }
    
    return even.concat(odd)
};
```
