# [56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/)
给出一个区间的集合，请合并所有重叠的区间。

示例 1:
```
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```
示例 2:
```
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```
## 解法
### 解一
[官方题解](https://leetcode-cn.com/problems/merge-intervals/solution/he-bing-qu-jian-by-leetcode-solution/)
1. 先将数组按左端点进行排序
2. 将 intervals[0] 推入 result 数组，当成栈来用
3. 每次将 result 最后一个数组中的右端点和 intervals[i] 左端点比较，如果大于等于，就进行合并 `result[result.length - 1][1] = intervals[i][1]`

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return []
    intervals.sort((a, b) => a[0] - b[0])
    const result = [intervals[0]]
    for (let i = 1, len = intervals.length; i < len; i++) {
        if (result[result.length - 1][1] >= intervals[i][0]) {
            // 防止有 [[1,4],[2,3]] 的情况
            if (result[result.length - 1][1] < intervals[i][1]) {
                result[result.length - 1][1] = intervals[i][1]
            }
        } else {
            result.push(intervals[i])
        }
    }

    return result
};
```
