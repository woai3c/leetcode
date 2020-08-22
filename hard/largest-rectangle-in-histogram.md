# [84. 柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram.png)

以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/histogram_area.png)

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。


示例:
```
输入: [2,1,5,6,2,3]
输出: 10
```
## 解法
### 解一
暴力法
```js
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0
    for (let i = 0, len = heights.length; i < len; i++) {
        let minHeight = heights[i]
        for (let j = i; j < len; j++) {
            minHeight = Math.min(minHeight, heights[j])
            max = Math.max(max, (j - i + 1) * minHeight)
        }
    }

    return max
};
```
### 解二
