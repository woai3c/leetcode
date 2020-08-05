# [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:
```
输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
```
示例 2:
```
输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]
```
## 解法
二分查找
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const len = nums.length
    let start = 0
    let end = len - 1
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        if (nums[mid] < target) {
            start = mid + 1
        } else if (nums[mid] > target) {
            end = mid - 1
        } else {
            // 如果找到 target，还得往左右两边搜索是否有相同的值
            let i = mid
            let j = mid
            while (--i >= 0) {
                if (nums[i] != nums[mid]) {
                    break
                }
            }

            while (++j < len) {
                if (nums[j] != nums[mid]) {
                    break
                }
            }

            return [i + 1, j - 1]
        }
    }

    return [-1, -1]
};
```
