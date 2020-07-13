# [剑指 Offer 61. 扑克牌中的顺子](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/)
从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。


示例 1:
```
输入: [1,2,3,4,5]
输出: True
```

示例 2:
```
输入: [0,0,1,2,5]
输出: True
```

限制：

* 数组长度为 5 
* 数组的数取值为 [0, 13] .

## 解法
### 实现一
先排序，顺子有两种情况：
1. 从小到大连续的情况，例如 1 2 3 4 5。
2. 从大到小，10 11 12 13 1，这种情况顺子的头和尾相差 9。

当前值为 0 时，记录 0 的次数。遇到不是 0 的数，需要判断当前值和下一个值相减是否为 1 或 9。
如果为 1，直接开始下一个循环就行了。如果为 9，则还需要判断 nums[0] 和 nums[4] 是否连续 `nums[4] % 14 != nums[i]`。

不为 1 和 9 的情况，需要判断下一个值和当前值差值为多少。

例如 0 0 1 2 5，5 和 2 之间差值为 3，刚好有两个 0，可以抵挡两个 1。即 5 和 2 的差值变为 1 了，这时算作连续的情况，即是顺子。
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    nums.sort((a, b) => a - b)
    let zero = 0
    for (let i = 0; i < 4; i++) {
        if (nums[i] == 0) {
            zero++
            continue
        }

        let distance = nums[i + 1] - nums[i]
        if (distance == 9 && (nums[4] % 14 != nums[i]) && nums[i] != 0) {
            return false
        }

        if (distance != 1) {
            while (distance != 1) {
                if (zero) {
                    zero--
                    distance--
                } else {
                    return false
                }
            }
        }
    }

    return true
};
```
### 实现二
看了一下别人的答案，好像不需要考虑从大小到的顺子，只需要考虑从小到大的顺子，这种情况下只需要判断最小值和最大值的差值是否小于 5。
如果小于 5 就是顺子。不过还是考虑是否有重复又不为 0 的情况，这种情况直接返回 false。
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let max = 0
    let min = 14
    const hash = {}
    for (let num of nums) {
        if (num == 0) continue
        max = Math.max(num, max)
        min = Math.min(num, min)
        if (hash[num]) return false
        hash[num] = true
    }

    return max - min < 5
};
```