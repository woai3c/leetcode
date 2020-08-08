# [45. 跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:
```
输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```
说明:

假设你总是可以到达数组的最后一个位置。
## 解法
每次将当前数值所能到达的最大范围划分为一段。

例如有 [2,3,1,1,4]，第一个数为 2，那它对应的 3 和 1 为一段，每次遍历完一个段步数加 1。

在遍历这一个段时，要判断每个数所能到达的范围是否大于等于最后一个索引，如果符合条件，就返回当前步数 + 1。

如果不符合条件，就和当前段的历史最大值比较，取大值。等遍历完这一段后，要从这个最大值开始进行下一步的计算。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    if (nums.length == 1) return 0
    if (nums[0] >= nums.length - 1) return 1

    const lastIndex = nums.length - 1
    let step = 0 // 当前步数
    let start = 0 // 当前索引
    while (true) {
        step++
        let val = nums[start++]
        let max = 0
        let maxIndex = 0
        while (val--) {
            if (nums[start] + start >= lastIndex) return step + 1
            if (nums[start] + start > max) {
                max = nums[start] + start
                maxIndex = start
            }

            start++
        }

        start = maxIndex
    }
};
```
看了一下[官方题解](https://leetcode-cn.com/problems/jump-game-ii/solution/tiao-yue-you-xi-ii-by-leetcode-solution/)方法二，发现和我的思路一样，只不过更加巧妙。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    const lastIndex = nums.length - 1
    let step = 0
    let maxIndex = 0
    let end = 0
    for (let i = 0; i < lastIndex; i++) {
        maxIndex = Math.max(maxIndex, nums[i] + i)
        if (end == i) {
            end = maxIndex
            step++
        }
    }

    return step
};
```
