# [剑指 Offer 56 - II. 数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。


示例 1：
```
输入：nums = [3,4,3,3]
输出：4
```
示例 2：
```
输入：nums = [9,1,7,9,7,9,7]
输出：1
```

限制：

* 1 <= nums.length <= 10000
* 1 <= nums[i] < 2^31

## 解法
一是排序，二是哈希
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 1, len = nums.length - 1; i < len; i++) {
        if (nums[i - 1] != nums[i] && nums[i] != nums[i + 1]) return nums[i]
    }

    if (nums[0] != nums[1]) return nums[0]
    return nums[nums.length - 1]
};
```
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = {}
    for (let num of nums) {
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }

    const keys = Object.keys(hash)
    for (let key of keys) {
        if (hash[key] == 1) return key
    }
};
```
