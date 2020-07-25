# [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 

示例:
```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
## 解法
### 解一
暴力
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let diff = 0
    for (let i = 0, len = nums.length; i < len; i++) {
        diff = target - nums[i]
        const index = nums.indexOf(diff)
        if (index > -1 && index != i) return [i, index]
    }
};
```
### 解二
哈希
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        const val = nums[i]
        const diff = hash[target - val]
        if (diff !== undefined) return [diff, i]
        hash[val] = i
    }
};
```
