# [78. 子集](https://leetcode-cn.com/problems/subsets/)
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:
```
输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```
## 解法
### 解一
由于是求数组的所有子集，所以可以在每次递归遍历时，将当前的已遍历的路径（子集）添加到结果中。
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const len = nums.length
    const result = []

    function backtrace(start, path) {
        result.push(path.slice())
        if (start == len) return
        for (let i = start; i < len; i++) {
            path.push(nums[i])
            backtrace(i + 1, path)
            path.pop()
        }
    }

    backtrace(0, [])
    return result
};
```
### 解二
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums || !nums.length) return nums
    const len = nums.length
    const result = []
    // 用位图来表示一共有多少种组合，例如 nums.length == 3，就有 8 种组合
    const combinations = Math.pow(2, len)
    for (let i = 0; i < combinations; i++) {
        const arry = []
        for (let j = 0; j < len; j++) {
            // 逐位与，看是否为 1
            if ((i >> j) & 1 == 1) {
                arry.push(nums[len - 1 - j])
            }
        }

        result.push(arry)
    }

    return result
};
```
