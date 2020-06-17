# [40. 组合总和 II](https://leetcode-cn.com/problems/combination-sum-ii/)
给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

* 所有数字（包括目标数）都是正整数。
* 解集不能包含重复的组合。 
示例 1:
```
输入: candidates = [10,1,2,7,6,1,5], target = 8,
所求解集为:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```
示例 2:
```
输入: candidates = [2,5,2,1,2], target = 5,
所求解集为:
[
  [1,2,2],
  [5]
]
```

### 实现1
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (!candidates.length) return []
    const result = []
    candidates.sort((a, b) => a - b)
    for (let i = 0, len = candidates.length; i < len; i++) {
        dfs(candidates, target, 0, i, [], result)
    }

    return unique(result)
};

function dfs(candidates, target, sum, index, path, result) {
    if (sum < target && index < candidates.length) {
        sum += candidates[index]
        path.push(candidates[index])
        if (sum == target) {
            result.push(path)
        } else {
            for (let i = index + 1, len = candidates.length; i < len; i++) {
                dfs(candidates, target, sum, i, [...path], result)
            }
        }
    }
}

function unique(data) {
    const result = []
    const strArry = []
    for (let i = 0, len = data.length; i < len; i++) {
        const str = data[i].toString()
        if (!strArry.includes(str)) {
            strArry.push(str)
            result.push(data[i])
        }
    }

    return result
}
```
### 实现2
```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = []
    candidates.sort((a, b) => a - b) // 升序
    dfs(candidates, target, 0, [], result)
    return result
};

function dfs(candidates, target, index, path, result) {
    if (target == 0) return result.push([...path])
    if (target < 0) return
    for (let i = index, len = candidates.length; i < len; i++) {
        const val = candidates[i]
        if (val > target) return
        // 如果以当前结点为头结点的所有组合都找完了，那么下一个与他相同的头结点就不用去找了。
        if (i > index && candidates[i - 1] == candidates[i]) continue
        path.push(val)
        dfs(candidates, target - val, i + 1, path, result)
        path.pop()
    }
}
```
