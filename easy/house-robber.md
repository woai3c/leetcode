# [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：
```
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```
示例 2：
```
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

提示：

* 0 <= nums.length <= 100
* 0 <= nums[i] <= 400

## 解法
同样的解法，不同的实现。

将同一个问题，分解成同样的子问题求解。

假如偷到第 k 间房间，那么当前的最大值为 nums[k - 2] + nums[k] 或者 nums[k - 1]。

一直分解到 k 为 0 或 1 为止，此时有如下终止循环的方法：
```js
if (index == 0) return nums[0]
if (index == 1) return Math.max(nums[0], nums[1])
```
同时还需要建立一个数组将每个索引对应的最大值缓存起来。

这样当求下一个索引最大值的时候，直接使用 `result[i] = Math.max(result[i - 2] + nums[i], result[i - 1])` 就能求得当前最大值。

### 实现1
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || !nums.length) return 0
    const result = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2, len = nums.length; i < len; i++) {
        result[i] = Math.max(result[i - 2] + nums[i], result[i - 1])
    }

    return result[nums.length - 1]
};
```

### 实现2
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums || !nums.length) return 0
    let preSum1 = Math.max(nums[0], nums[1])
    let preSum2 = nums[0]

    if (nums.length == 1) return preSum2
    if (nums.length == 2) return preSum1
    
    let result
    for (let i = 2, len = nums.length; i < len; i++) {
        result = Math.max(preSum2 + nums[i], preSum1)
        preSum2 = preSum1
        preSum1 = result
    }

    return result
};
```
