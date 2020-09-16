# [1122. 数组的相对排序](https://leetcode-cn.com/problems/relative-sort-array/)
给你两个数组，arr1 和 arr2，

* arr2 中的元素各不相同
* arr2 中的每个元素都出现在 arr1 中

对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例：
```
输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
```

提示：

* arr1.length, arr2.length <= 1000
* 0 <= arr1[i], arr2[i] <= 1000
* arr2 中的元素 arr2[i] 各不相同
* arr2 中的每个元素 arr2[i] 都出现在 arr1 中

## 解法
### 解一
先根据 arr2 对 arr1 进行相对排序，再对 arr1 剩余部分进行冒泡排序。
```js
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    const len1 = arr1.length
    const len2 = arr2.length
    let start = 0
    for (let i = 0; i < len2; i++) {
        const val = arr2[i]
        for (let j = 0; j < len1; j++) {
            if (arr1[j] == val) {
                const temp = arr1[j]
                arr1[j] = arr1[start]
                arr1[start] = temp
                start++
            }
        }
    }
    
    for (let i = start; i < len1 - 1; i++) {
        let hasChange = false
        for (let j = start; j < len1 - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                const temp = arr1[j]
                arr1[j] = arr1[j + 1]
                arr1[j + 1] = temp
                hasChange = true
            }
        }
        
        if (!hasChange) break
    }
    
    return arr1
};
```
### 解二
```js
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    const len1 = arr1.length
    const len2 = arr2.length
    // 由于数组的值不会超过 1000，所以可设一个 1001 长度的数组当哈希
    const hash = new Array(1001).fill(0)
    for (const num of arr1) {
        hash[num]++
    }

    let start = 0
    // 按 arr2 的相对顺序填充 arr1
    for (const num of arr2) {
        while (hash[num] > 0) {
            arr1[start++] = num
            hash[num]--
        }
    }

    // 由于用数组的值当作 key，所以哈希是一个有序数组
    // 现在将 hash 剩余的值填充进 arr1 即可
    for (let num = 0; num < 1001; num++) {
        while (hash[num] > 0) {
            arr1[start++] = num
            hash[num]--
        }
    }

    return arr1
};
```
