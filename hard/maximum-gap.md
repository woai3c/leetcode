# [164. 最大间距](https://leetcode-cn.com/problems/maximum-gap/)
给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

如果数组元素个数小于 2，则返回 0。

示例 1:
```
输入: [3,6,9,1]
输出: 3
解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
```
示例 2:
```
输入: [10]
输出: 0
解释: 数组元素个数小于 2，因此返回 0。
```
说明:

* 你可以假设数组中所有元素都是非负整数，且数值在 32 位有符号整数范围内。
* 请尝试在线性时间复杂度和空间复杂度的条件下解决此问题。

## 解法
[官方题解-基数排序](https://leetcode-cn.com/problems/maximum-gap/solution/zui-da-jian-ju-by-leetcode/)
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length < 2) return 0

    let max = 0
    for (const num of nums) {
        if (num > max) max = num
    }

    let arr = nums.slice()
    let div = 1
    while (max > 0) {
        // 将数组分成十个组
        const count = []
        for (let i = 0; i < 10; i++) count.push([])

        // 从个、十、百...位开始，按余数进行分组
        for (const num of arr) {
            count[~~(num / div) % 10].push(num)
        }

        // 对计数排序后的数组重新进行合并
        arr = []
        for (let i = 0; i < 10; i++) {
            for (const num of count[i]) {
                arr.push(num)
            }
        }

        div *= 10
        max = ~~(max / 10)
    }

    let result = 0
    for (let i = 1, len = arr.length; i < len; i++) {
        result = Math.max(result, arr[i] - arr[i - 1])
    }

    return result
};
```
