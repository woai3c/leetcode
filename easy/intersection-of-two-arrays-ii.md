# [350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)
给定两个数组，编写一个函数来计算它们的交集。

示例 1:
```
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]
```
示例 2:
```
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]
```
说明：

* 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
* 我们可以不考虑输出结果的顺序。

进阶:

* 如果给定的数组已经排好序呢？你将如何优化你的算法？
* 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
* 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
## 解法
### 实现1
暴力匹配
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (!nums1.length || !nums2.length) return []
    nums2.sort((a, b) => a - b)

    const result = []
    let index
    for (let i = 0, len = nums1.length; i < len; i++) {
        index = binarySearch(nums2, nums1[i])
        if (index != -1) {
            result.push(nums1[i])
            nums2 = nums2.slice(0, index).concat(nums2.slice(index + 1))
        }
    }

    return result
};

function binarySearch(nums, val) {
    let start = 0
    let end = nums.length - 1
    let mid
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2)
        if (val < nums[mid]) {
            end = mid - 1
        } else if (val > nums[mid]) {
            start = mid + 1
        } else {
            return mid
        }
    }

    return -1
}
```
### 实现2
利用哈希缓存较小数组
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let len1 = nums1.length
    let len2 = nums2.length
    if (!len1 || !len2) return []

    let maxNums
    let minNums
    let maxLen
    let minLen
    if (len1 > len2) {
        minNums = nums2
        minLen = len2
        maxNums = nums1
        maxLen = len1
    } else {
        minNums = nums1
        minLen = len1
        maxNums = nums2
        maxLen = len2
    }

    const hash = {}
    for (let i = 0; i < minLen; i++) {
        const key = minNums[i]
        if (hash[key]) {
            hash[key]++
        } else {
            hash[key] = 1
        }
    }

    const result = []
    for (let i = 0; i < maxLen; i++) {
        const key = maxNums[i]
        if (hash[key]) {
            result.push(key)
            hash[key]--
        }
    }

    return result
};
```
### 实现3
双指针
```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (!nums1.length || !nums2.length) return []
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    const result = []
    let i = 0
    let j = 0
    let len1 = nums1.length
    let len2 = nums2.length
    while (i < len1 && j < len2) {
        if (nums1[i] > nums2[j]) {
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        } else {
            result.push(nums1[i])
            i++
            j++
        }
    }

    return result
};
```
