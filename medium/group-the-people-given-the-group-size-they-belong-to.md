# [1282. 用户分组](https://leetcode-cn.com/problems/group-the-people-given-the-group-size-they-belong-to/)
有 n 位用户参加活动，他们的 ID 从 0 到 n - 1，每位用户都 恰好 属于某一用户组。

给你一个长度为 n 的数组 groupSizes，其中包含每位用户所处的用户组的大小，请你返回用户分组情况（存在的用户组以及每个组中用户的 ID）。

你可以任何顺序返回解决方案，ID 的顺序也不受限制。此外，题目给出的数据保证至少存在一种解决方案。


示例 1：
```
输入：groupSizes = [3,3,3,3,3,1,3]
输出：[[5],[0,1,2],[3,4,6]]
解释： 
其他可能的解决方案有 [[2,1,6],[5],[0,4,3]] 和 [[5],[0,6,2],[4,3,1]]。
```
示例 2：
```
输入：groupSizes = [2,1,3,3,3,2]
输出：[[1],[0,5],[2,3,4]]
```

提示：

* groupSizes.length == n
* 1 <= n <= 500
* 1 <= groupSizes[i] <= n

## 解法
其实这道题是要我们将数组中值相等的索引放到一个分组中。
```
输入：groupSizes = [2,1,3,3,3,2]
输出：[[1],[0,5],[2,3,4]]
```
数组的索引对应的是用户的 ID，用上面的代码来举例。例如用户 0 所在组大小为 2，也就是说这个组有 2 个人。

然后索引 5，也就是用户 5 所在的用户组也是 2。说明用户 0 和用户 5 是在一个组。索引 1，也就是用户 1 所在的组为 1，只有它自己。用户 2 3 4 为一组，因为组大小为 3，有 3 个人。

这样就能看出来有 3 个组了，所以答案是 `[[1],[0,5],[2,3,4]]`。

解法是利用哈希表来记录每个值，每个值对应一个数组，数组中存储着对应值对应的索引。如果一个数组中索引的个数超过了值的大小，那就按值的大小对数组进行分组。
```js
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const hash = {}
    for (let i = 0, len = groupSizes.length; i < len; i++) {
        const val = groupSizes[i]
        if (hash[val]) {
            hash[val].push(i)
        } else {
            hash[val] = [i]
        }
    }

    const result = []
    Object.keys(hash).forEach(key => {
        key = Number(key)
        const arr = hash[key]
        let start = 0
        while (start < arr.length) {
            result.push(arr.slice(start, start + key))
            start += key
        }
    })

    return result
};
```
