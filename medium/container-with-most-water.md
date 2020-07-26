# [11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

![](https://aliyun-lc-upload.oss-cn-hangzhou.aliyuncs.com/aliyun-lc-upload/uploads/2018/07/25/question_11.jpg)

图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例：
```
输入：[1,8,6,2,5,4,8,3,7]
输出：49
```
## 解法
### 解一
暴力循环
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    for (let i = 0, len = height.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            const h = Math.min(height[i], height[j])
            max = Math.max(max, h * (j - i))
        }
    }

    return max
};
```
### 解二
双指针，从左右边界开始。当左右指针比较时，将较小的那个指针往前挪动。
```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let left = 0
    let right = height.length - 1
    while (left <= right) {
        const h = Math.min(height[left], height[right])
        max = Math.max(max, h * (right - left))
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return max
};
```
