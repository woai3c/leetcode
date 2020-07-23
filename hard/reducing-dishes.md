# [1402. 做菜顺序](https://leetcode-cn.com/problems/reducing-dishes/)
一个厨师收集了他 n 道菜的满意程度 satisfaction ，这个厨师做出每道菜的时间都是 1 单位时间。

一道菜的 「喜爱时间」系数定义为烹饪这道菜以及之前每道菜所花费的时间乘以这道菜的满意程度，也就是 time[i]*satisfaction[i] 。

请你返回做完所有菜 「喜爱时间」总和的最大值为多少。

你可以按 任意 顺序安排做菜的顺序，你也可以选择放弃做某些菜来获得更大的总和。
 

示例 1：
```
输入：satisfaction = [-1,-8,0,5,-9]
输出：14
解释：去掉第二道和最后一道菜，最大的喜爱时间系数和为 (-1*1 + 0*2 + 5*3 = 14) 。每道菜都需要花费 1 单位时间完成。
```
示例 2：
```
输入：satisfaction = [4,3,2]
输出：20
解释：按照原来顺序相反的时间做菜 (2*1 + 3*2 + 4*3 = 20)
```
示例 3：
```
输入：satisfaction = [-1,-4,-5]
输出：0
解释：大家都不喜欢这些菜，所以不做任何菜可以获得最大的喜爱时间系数。
```
示例 4：
```
输入：satisfaction = [-2,5,-1,0,3,-3]
输出：35
```
提示：

* n == satisfaction.length
* 1 <= n <= 500
* -10^3 <= satisfaction[i] <= 10^3

## 解法
[官方题解](https://leetcode-cn.com/problems/reducing-dishes/solution/zuo-cai-shun-xu-by-leetcode-solution/)

对数组进行降序排列，然后从头开始对数组进行求和，如果中间出现和小于 0，则终止。

假设有如下数组：
```js
[-1,2,3]
```
它们的和为 4，大于 0，能得到最大的喜爱时间。如果插入一个 -3：
```js
[-1,2,3,-3]
```
大于 0，依然能得到最大的喜爱时间。但如果插入 -5，小于 0，这时就不能要 -5 了，得不到最大的喜爱时间。

这三个数组的喜爱时间分别为 `12,13,11`，可以发现第一个数组和第三个数组，区别在于 -5。

第三个数组比第一个数组小，因为第三个数组相加小于 0，而第一个数组相加大于 0。

只要数组相加大于 0，无论怎么样，最后的喜爱时间总是最大的。
```js
/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => b - a)
    let sum = 0
    let i = 0
    for (let len = satisfaction.length; i < len; i++) {
        if (sum + satisfaction[i] > 0) {
            sum += satisfaction[i]
        } else {
            break
        }
    }

    let count = 1
    let result = 0
    while (--i >= 0) {
        result += satisfaction[i] * count++
    }

    return result
};
```
