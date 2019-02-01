# 有序数组的平方
给定一个按非递减顺序排序的整数数组 `A`，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

 

示例 1：
```
输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
```
示例 2：
```
输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]
```

提示：

1. `1 <= A.length <= 10000`
2. `-10000 <= A[i] <= 10000`
3. `A` 已按非递减顺序排序。

## 实现
#### 实现1
```
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    for (let i = 0, len = A.length; i < len; i++) {
        let temp = A[i]
        A[i] = temp * temp
    }
    
    return shellSort(A)
};
// 希尔排序
function shellSort(arry) {
    let len = arry.length
    let gap, i
    
    for (gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (i = gap; i < len; i++) {
            let temp = arry[i]
            let j = i - gap
            
            while (j >= 0 && arry[j] > temp) {
                arry[j + gap] = arry[j]
                j = j - gap
            }
            
            if (j != i - gap) {
                arry[j + gap] = temp
            }
        }
    }
    
    return arry
}
```

#### 实现2
```
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map(e => e * e).sort((a, b) => a - b)
};
```
