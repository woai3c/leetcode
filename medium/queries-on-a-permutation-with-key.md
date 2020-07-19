# [1409. 查询带键的排列](https://leetcode-cn.com/problems/queries-on-a-permutation-with-key/)
给你一个待查数组 queries ，数组中的元素为 1 到 m 之间的正整数。 请你根据以下规则处理所有待查项 queries[i]（从 i=0 到 i=queries.length-1）：

* 一开始，排列 P=[1,2,3,...,m]。
* 对于当前的 i ，请你找出待查项 queries[i] 在排列 P 中的位置（下标从 0 开始），然后将其从原位置移动到排列 P 的起始位置（即下标为 0 处）。注意， queries[i] 在 P 中的位置就是 queries[i] 的查询结果。
请你以数组形式返回待查数组  queries 的查询结果。

 

示例 1：
```
输入：queries = [3,1,2,1], m = 5
输出：[2,1,2,1] 
解释：待查数组 queries 处理如下：
对于 i=0: queries[i]=3, P=[1,2,3,4,5], 3 在 P 中的位置是 2，接着我们把 3 移动到 P 的起始位置，得到 P=[3,1,2,4,5] 。
对于 i=1: queries[i]=1, P=[3,1,2,4,5], 1 在 P 中的位置是 1，接着我们把 1 移动到 P 的起始位置，得到 P=[1,3,2,4,5] 。 
对于 i=2: queries[i]=2, P=[1,3,2,4,5], 2 在 P 中的位置是 2，接着我们把 2 移动到 P 的起始位置，得到 P=[2,1,3,4,5] 。
对于 i=3: queries[i]=1, P=[2,1,3,4,5], 1 在 P 中的位置是 1，接着我们把 1 移动到 P 的起始位置，得到 P=[1,2,3,4,5] 。 
因此，返回的结果数组为 [2,1,2,1] 。  
```
示例 2：
```
输入：queries = [4,1,2,2], m = 4
输出：[3,1,2,0]
```
示例 3：
```
输入：queries = [7,5,5,8,3], m = 8
输出：[6,5,0,7,5]
```

提示：

* 1 <= m <= 10^3
* 1 <= queries.length <= m
* 1 <= queries[i] <= m

## 解法
### 实现一
按题目要求做就行，在调整 P 的顺序时比较耗时和耗空间。
```js
/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    let P = []
    const result = []
    for (let i = 1; i <= m; i++) {
        P[i - 1] = i
    }

    for (let i = 0, len = queries.length; i < len; i++) {
        const val = queries[i]
        result[i] = P.indexOf(val)
        P = changeOrder(P, result[i])
    }

    return result
};

function changeOrder(P, i) {
    const result = [P[i], ...P.slice(0, i), ...P.slice(i + 1)] 
    return result
}
```
### 实现二
[官方题解：树状数组](https://leetcode-cn.com/problems/queries-on-a-permutation-with-key/solution/cha-xun-dai-jian-de-pai-lie-by-leetcode-solution/)
```js
/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    const len = queries.length
    const arr = new Array(len + m)
    let head = len // 第一个不是 undefined 的值对应的索引
    for (let i = 1, j = len; i <= m; i++, j++) {
        arr[j] = i
    }

    const result = []
    for (let i = 0; i < len; i++) {
        result[i] = findIndex(queries[i])
        update(queries[i])
    }

    function findIndex(val) {
        let i = head
        let count = 0
        for (let len = arr.length; i < len; i++) {
            if (arr[i] === undefined) continue
            if (arr[i] == val) {
                arr[i] = undefined
                break
            }

            count++
        }

        return count
    }

    function update(val) {
        arr[--head] = val
    }

    return result
};
```
