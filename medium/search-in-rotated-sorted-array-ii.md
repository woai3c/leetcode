# [81. 搜索旋转排序数组 II](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/)
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

示例 1:
```
输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true
```
示例 2:
```
输入: nums = [2,5,6,0,0,1,2], target = 3
输出: false
```
进阶:

* 这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
* 这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？
## 解法
1. 如果中间值和开头的值重复，则直接跳到开头下一个值重新计算。
2. 如果中间值小于目标值，则只有两种情况下需要往右边查找，否则往左边查找：一是目标值小于 nums[lastIndex]，二是中间值和目标值都大于 nums[lastIndex]。
3. 如果中间值大于目标值，则只有两种情况下需要往左边查找，否则往右边查找：一是中间值小于 nums[lastIndex]，二是中间值和目标值都大于 nums[lastIndex]。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    const lastIndex = nums.length - 1
    let start = 0
    let end = lastIndex
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2)
        if (nums[mid] == target) return true

        if (nums[mid] > target) {
            if (nums[start] == nums[mid]) {
                start++
            } else if (nums[mid] <= nums[lastIndex] || (target > nums[lastIndex] && nums[mid] > nums[lastIndex])) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (nums[start] == nums[mid]) {
                start++
            } else if (target <= nums[lastIndex] || (target > nums[lastIndex] && nums[mid] > nums[lastIndex])) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }

    }

    return false
};
```
