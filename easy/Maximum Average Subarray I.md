# 子数组最大平均数 I
给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

示例 1:
```
输入: [1,12,-5,-6,50,3], k = 4
输出: 12.75
解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
```

注意:

1. `1 <= k <= n <= 30,000`。
2. 所给数据范围 [-10,000，10,000]。

## 实现
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = 0
    let k1 = 0
    while (k1 < k) {
        max += nums[k1++]
    }
    
    let sum = max
    for (let i = k, len = nums.length; i < len; i++) {
        sum = sum - nums[i - k] + nums[i]
        max = sum > max? sum : max
    }
    
    return max / k
};
```
