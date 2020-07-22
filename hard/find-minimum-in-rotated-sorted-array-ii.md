# [154. 寻找旋转排序数组中的最小值 II](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

注意数组中可能存在重复的元素。

示例 1：
```
输入: [1,3,5]
输出: 1
```
示例 2：
```
输入: [2,2,2,0,1]
输出: 0
```
说明：

* 这道题是 寻找旋转排序数组中的最小值 的延伸题目。
* 允许重复会影响算法的时间复杂度吗？会如何影响，为什么？
## 解法
二分查找法，如果数组进行了旋转。那中间值 nums[mid] 有 3 可能：
1. 大于 nums[end]，那就要继续往中间值的右边继续寻找。
2. 小于 nums[end]，那就要继续往中间值的左边继续寻找。
3. 等于 nums[end]，end--，重新搜索。

为了防止数组没旋转，最后加一个 `return nums[0]`。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const len = nums.length
    if (nums.length == 1 || nums[0] < nums[len - 1]) return nums[0]

    let start = 0
    let end = len - 1
    while (start <= end) {
        const mid = start + Math.floor(end - start / 2)
        
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1]
        if (nums[mid] < nums[mid - 1]) return nums[mid]

        if (nums[mid] < nums[end]) {
            end = mid - 1
        } else if (nums[mid] > nums[end]) {
            start = mid + 1
        } else {
            end--
        }
    }

    return nums[0]
};
```
