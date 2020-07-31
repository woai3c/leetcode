# [18. 四数之和](https://leetcode-cn.com/problems/4sum/)
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：
```
给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```
## 解法
和[15. 三数之和](https://github.com/woai3c/leetcode/blob/master/medium/3sum.md)解法一样，利用双指针。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    const result = []
    for (let i = 0; i < len - 3; i++) {
        if (i && nums[i] == nums[i - 1]) continue
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue
            
            let left = j + 1
            let right = len - 1
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])

                    left++
                    while (nums[left] == nums[left - 1]) {
                        left++
                    }

                    right--
                    while (nums[right] == nums[right + 1]) {
                        right--
                    }
                } else if (sum > target) {
                    right--
                } else {
                    left++
                }
            }
        }
    }

    return result
};
```
