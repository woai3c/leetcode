# [4. 寻找两个正序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/)
给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

 

示例 1:
```
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```
示例 2:
```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```
## 解法
中位数的特点：
1. 如果数组长度是奇数，则取中间值
2. 如果数组长度是偶数，则取中间两位的平均数
### 解一
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    // 因为要找的是中位数，所以只需要遍历两个数组总长度的一半
    const len = Math.floor((len1 + len2) / 2)
    // 由于两个数组之间的数有可能会混杂在一起，所以用 count 表示在两个数组之间真正的索引
    // 它表示遍历到第几个数了，从 0 开始
    // 相当于把两个数组当成一个数组来遍历
    let count = 0
    let i = 0
    let j = 0
    let curVal = 0
    let preVal = 0
    while (count <= len) {
        preVal = curVal
        // 从最小值开始遍历
        if (i == len1 || nums1[i] > nums2[j]) {
            curVal = nums2[j++]
        } else {
            curVal = nums1[i++]
        }

        count++
    }

    if ((len1 + len2 & 1) == 0) {
        return (preVal + curVal) / 2
    }

    return curVal
};
```
### 解二
合并数组，排序，取中位数。
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = nums1.concat(nums2)
    arr.sort((a, b) => a - b)

    const len = arr.length
    if (len % 2 == 0) {
        return (arr[len / 2 - 1] + arr[len / 2]) / 2
    }

    return arr[Math.floor(len / 2)]
};
```
### 解三
[官方题解](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xun-zhao-liang-ge-you-xu-shu-zu-de-zhong-wei-s-114/)
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    let k = Math.ceil((len1 + len2) / 2)
    let i1 = 0
    let i2 = 0
    while (k > 1) {
        const index = Math.floor(k / 2) - 1
        if (index + i2 >= len2 || (index + i1 <= len1 && nums1[index + i1] < nums2[index + i2])) {
            i1 += index + 1
        } else {
            i2 += index + 1
        }

        k -= Math.floor(k / 2)
    }
    
    let curVal
    if (!nums2[i2] || (nums1[i1] && nums1[i1] < nums2[i2])) {
        curVal = nums1[i1++]
    } else {
        curVal = nums2[i2++]
    }

    // 如果是奇数，直接返回
    if ((len1 + len2) % 2) {
        return curVal
    } else {
        // 偶数需要再找下一个值
        if (!nums2[i2] || (nums1[i1] && nums1[i1] < nums2[i2])) {
            return (curVal + nums1[i1]) / 2
        }

        return (curVal + nums2[i2]) / 2
    }
};
```
