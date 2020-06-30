# [53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:
```
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

## 解法
动态规划，f(i) 的最大值为 max(f(i - 1) + nums[i], nums[i])，可用 preMaxNum 记录 f(i - 1) 的值，同时用 maxNum 记录历史最大值。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || !nums.length) return 0
    let preMaxSum = 0
    let maxSum = nums[0]
    for (let i = 0, len = nums.length; i < len; i++) {
        preMaxSum = Math.max(preMaxSum + nums[i], nums[i])
        maxSum = Math.max(preMaxSum, maxSum)
    }

    return maxSum
};
```
