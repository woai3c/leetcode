# [215. 数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:
```
输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```
示例 2:
```
输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

## 解法
快排和原生排序
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (!nums || !nums.length) return 0
    quickSort(nums, 0, nums.length - 1)
    return nums[k - 1]
};

function quickSort(nums, start, end) {
    if (start >= end) return
    const index = segment(nums, start, end)
    quickSort(nums, start, index - 1)
    quickSort(nums, index + 1, end)
}

function segment(nums, start, end) {
    let val = nums[start]
    let i = start
    let j = end + 1
    while (true) {
        while (nums[++i] > val) {
            if (i == end) break
        }

        while (nums[--j] < val) {
            if (j == start) break
        }

        if (i >= j) break
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    nums[start] = nums[j]
    nums[j] = val
    return j
}
```
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (!nums || !nums.length) return 0
    nums.sort((a, b) => b - a)
    return nums[k - 1]
};
```
