# [46. 全排列](https://leetcode-cn.com/problems/permutations/)
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:
```
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```
## 解法
递归回溯
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums || !nums.length) return nums
    const result = []
    dfs(nums, [], result)
    return result
};

function dfs(nums, path, result) {
    if (path.length == nums.length) return result.push(path.slice())
    for (let i = 0, len = nums.length; i < len; i++) {
        if (path.includes(nums[i])) continue
        path.push(nums[i])
        dfs(nums, path, result)
        path.pop()
    }
}
```
