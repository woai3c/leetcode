# [90. 子集 II](https://leetcode-cn.com/problems/subsets-ii/)
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:
```
输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```
## 解法
由于是求数组的所有子集，所以可以在每次递归遍历时，将当前的已遍历的路径（子集）添加到结果中。

不过，如果数组中有重复的数字就会造成有重复子集。

所以可以先将数组排序，这样在遍历时，可以将当前值和上一个值进行比较，如果相等则跳过，达到去重的效果。
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    const result = []

    function backtrace(start, path) {
        result.push(path.slice())
        if (start == len) return
        for (let i = start; i < len; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue
            path.push(nums[i])
            backtrace(i + 1, path)
            path.pop()
        }
    }

    backtrace(0, [])
    return result
};
```
