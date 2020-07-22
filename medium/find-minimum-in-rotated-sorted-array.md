# [153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

你可以假设数组中不存在重复元素。

示例 1:
```
输入: [3,4,5,1,2]
输出: 1
```
示例 2:
```
输入: [4,5,6,7,0,1,2]
输出: 0
```
## 解法
二分查找法，如果数组进行了旋转。那中间值 nums[mid] 有 2 可能：
1. 大于 nums[0]，那就要继续往中间值的右边继续寻找。
2. 小于 nums[0]，那就要继续往中间值的左边继续寻找。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const len = nums.length
    const firstVal = nums[0]
    if (nums.length == 1 || firstVal < nums[len - 1]) return firstVal

    let start = 0
    let end = len - 1
    while (start <= end) {
        const mid = start + Math.floor(end - start / 2)
        
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1]
        if (nums[mid] < nums[mid - 1]) return nums[mid]

        if (nums[mid] > firstVal) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
};
```
