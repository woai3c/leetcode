# [15. 三数之和](https://leetcode-cn.com/problems/3sum/)
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例：
```
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```
## 解法
双指针：
1. 排序
2. 循环遍历数组
3. 遍历 i 时，需要判断当前值是否大于 0，如果大于 0 就可以结束循环，因为后面都是比它大的数；如果当前值和上一个值相等，则跳过，防止重复。
4. 利用左右指针寻找另外两个数，分别是 `left = i + 1` 和 `right = len - 1`，如果找到的数大于 0，则 right--，小于 0 则 left++。
5. 等于 0 的时候还需要判断，左右指针的下一个数是否和当前左右指针对应的值相等，如果相等则跳过，直到值不重复为止。
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)

    const result = []
    for (let i = 0, l = nums.length - 2; i < l; i++) {
        if (nums[i] > 0) break
        if (i && nums[i] == nums[i - 1]) continue

        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                result.push([nums[i], nums[left], nums[right]])
                left++
                while (nums[left] == nums[left - 1]) {
                    left++
                }

                right--
                while (nums[right] == nums[right + 1]) {
                    right--
                }
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }

    return result
}
```
