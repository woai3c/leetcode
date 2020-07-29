# [16. 最接近的三数之和](https://leetcode-cn.com/problems/3sum-closest/)
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

示例：
```
输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
```

提示：

* 3 <= nums.length <= 10^3
* -10^3 <= nums[i] <= 10^3
* -10^4 <= target <= 10^4

## 解法
和[15. 三数之和](https://github.com/woai3c/leetcode/blob/master/medium/3sum.md)解法一样，利用双指针，不过要做点变动。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let result = Infinity
    for (let i = 0, len = nums.length; i < len - 2; i++) {
        if (i && nums[i] == nums[i - 1]) continue
        let left = i + 1
        let right = len - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum == target) return sum
            if (Math.abs(result - target) > Math.abs(sum - target)) {
                result = sum
            }

            if (sum > target) {
                right--
                while (nums[right] == nums[right + 1]) {
                    right--
                }
            } else {
                left++
                while (nums[left] == nums[left - 1]) {
                    left++
                }
            }
        }
    }

    return result
};
```
