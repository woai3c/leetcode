# [55. 跳跃游戏](https://leetcode-cn.com/problems/jump-game/)
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:
```
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
```
示例 2:
```
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
```
## 解法
贪心算法
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length == 1) return true
    const lastIndex = nums.length - 1
    let max = 0
    // 遍历每一点，获取它所能到达的最大距离，并和历史最大距离比较，取较大值
    // 在遍历时，需要判断当前点是否在历史最大距离范围内
    // 如果不在，说明它到不了那个范围，后面的距离更远，更到不了，所以直接返回 false
    for (let i = 0; i < lastIndex; i++) {
        if (i <= max) {
            max = Math.max(nums[i] + i, max)
            if (max >= lastIndex) return true
        } else {
            return false
        }
    }

    return false
};
```
