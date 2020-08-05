# [39. 组合总和](https://leetcode-cn.com/problems/combination-sum/)
给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

* 所有数字（包括 target）都是正整数。
* 解集不能包含重复的组合。 

示例 1：
```
输入：candidates = [2,3,6,7], target = 7,
所求解集为：
[
  [7],
  [2,2,3]
]
```
示例 2：
```
输入：candidates = [2,3,5], target = 8,
所求解集为：
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

提示：

* 1 <= candidates.length <= 30
* 1 <= candidates[i] <= 200
* candidate 中的每个元素都是独一无二的。
* 1 <= target <= 500
## 解法
这一题和[40. 组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)差不多，区别在于这一题能重复使用同一个值。
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b)
    const result = []
    const len = candidates.length

    function dfs(start, path, target) {
        if (target == 0) return result.push(path.slice())
        for (let i = start; i < len; i++) {
            // 小于 0，直接结束当前循环，因为后面的数都大于当前值
            if (target - candidates[i] < 0) break
            // 由于每一轮只取一个数，所以这一轮上一个数和当前值相等，代表结果是相同的，所以直接跳过
            if (i && candidates[i] == candidates[i - 1]) continue
            path.push(candidates[i])
            // 由于可以使用重复值，所以下一次循环的索引不用加 1，还是直接复用 i
            // 和组合总和II的区别就在于这了
            dfs(i, path, target - candidates[i])
            path.pop()
        }
    }

    dfs(0, [], target)
    return result
};
```
