# [面试题 08.04. 幂集](https://leetcode-cn.com/problems/power-set-lcci/)
幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。

说明：解集不能包含重复的子集。

示例:
```
 输入： nums = [1,2,3]
 输出： 
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
### 实现1
递归回溯
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums || !nums.length) return nums
    const result = []
    dfs(nums, 0, [], result)
    return result
};

function dfs(nums, start, path, result) {
    result.push(path.slice())
    if (start == nums.length) return
    for (let i = start, len = nums.length; i < len; i++) {
        path.push(nums[i])
        dfs(nums, i + 1, path, result)
        path.pop()
    }
}
```
### 实现2
用位图来表示，例如 nums `[1,2,3]`，分别有 8 种组合，用位图来表示就是 000 001 010... 刚好是 2 ** nums.length。
当位图中对应的 bit 为 1 时，就添加对应的数组元素。
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
