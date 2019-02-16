# 第三大的数
给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

示例 1:
```
输入: [3, 2, 1]

输出: 1

解释: 第三大的数是 1.
```
示例 2:
```
输入: [1, 2]

输出: 2

解释: 第三大的数不存在, 所以返回最大的数 2 .
```
示例 3:
```
输入: [2, 2, 3, 1]

输出: 1

解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。
```

## 实现
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max, second, third
    max = nums[0]
    
    for (let i = 1, len = nums.length; i < len; i++) {
        let temp = nums[i]
        if (temp != max) {
            if (temp > max) {
                third = second
                second = max
                max = temp
            } else if (second === undefined || temp > second) {
                third = second
                second = temp
            } else if (second !== temp && (third === undefined || temp > third)) {
                third = temp
            }
        }
    }
    
    return third === undefined? max : third
};
```
