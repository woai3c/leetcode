# [47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:
```
输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```
## 解法
回溯，由于数组可以包含重复的数字。所以要加一个 used 数组来判断数字有没有被使用。

如果当前的数和上一个数相同，并且上一个数没有被使用，那就要跳过，不然会有重复解。

例如有 [1,1,2] 数组：
1. i=0, [1]
2. [1,1] 虽然当前数和上一个数相同，但是上一个数在使用中，说明是在同一个数组里。
3. [1,1,2] 接下来开始新的循环
4. i=1, 由于 nums[1] 和 nums[0] 相同，并且上一个数没有在使用中，这样会有重复解，跳过循环，使用下一个数。
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b)
    const result = []
    const len = nums.length
    const used = []

    function backtrace(path) {
        if (path.length == len) return result.push(path.slice())

        for (let i = 0; i < len; i++) {
            if (used[i]) continue
            if (i && nums[i] == nums[i - 1] && !used[i - 1]) continue

            path.push(nums[i])
            used[i] = true
            backtrace(path)
            used[i] = false
            path.pop()
        }
    }

    backtrace([])
    return result
};
```
