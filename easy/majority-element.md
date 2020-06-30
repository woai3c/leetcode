# [169. 多数元素](https://leetcode-cn.com/problems/majority-element/)
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:
```
输入: [3,2,3]
输出: 3
```
示例 2:
```
输入: [2,2,1,1,1,2,2]
输出: 2
```
## 解法
### 实现1
哈希表计数
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length
    const half = Math.floor(len / 2)
    const hash = {}
    for (let i = 0; i < len; i++) {
        const key = nums[i]
        if (hash[key]) {
            hash[key]++
        } else {
            hash[key] = 1
        }
    }

    for (let key in hash) {
        if (hash[key] > half) return key
    }
};
```

### 实现2
排序，然后返回数组一半的索引对应的值。因为众数的数量超过一半，所以取中间的值必定是众数。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b)
    return nums[Math.floor(nums.length / 2)]
};
```

### 实现3
Boyer-Moore 投票算法，初始设置 `count = 0` `result = 0`。
1. 当 `count = 0` 时，将 result 设为当前值，并将 count 设为 1。
2. 后面遇到的数如果和 result 不一样，count--；如果一样，count++。
3. 下一个数重复步骤2，如果 count 为 0，重复步骤 1。

由于众数的数量超过一半，所以最后 result 的值必然是众数。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = 0
    let count = 0
    for (let i = 0, len = nums.length; i < len; i++) {
        if (count == 0) {
            result = nums[i]
            count++
        } else if (result == nums[i]) {
            count++
        } else {
            count--
        }
    }

    return result
};
```
