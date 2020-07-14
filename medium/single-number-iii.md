# [260. 只出现一次的数字 III](https://leetcode-cn.com/problems/single-number-iii/)
给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。

示例 :
```
输入: [1,2,1,3,2,5]
输出: [3,5]
```
注意：

* 结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
* 你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？
## 解法
### 实现一
[官方题解：两个掩码](https://leetcode-cn.com/problems/single-number-iii/solution/zhi-chu-xian-yi-ci-de-shu-zi-iii-by-leetcode/)
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let bitmask = 0
    // 异或操作，相同的数异或为 0，不同为 1
    for (const num of nums) {
        bitmask ^= num
    }

    // 取得最右边的 1
    const mrb = bitmask & (-bitmask)
    let x = 0

    // 假设两个不同的数为 x y
    // 和 x 进行 & 操作不为 0 的情况有两种：
    // 1. x 本身
    // 2. 和 x 部分 bit 相同的数，但这个数会有两个，进行异或操作会变成 0
    // 所以这个 for 循环是为了取得 x 的值
    for (const num of nums) {
        if (mrb & num) x ^= num
    }

    // 异或操作结合律
    // a ^ b = c
    // a ^ c = b
    // c ^ b = a
    return [x, bitmask ^ x]
};
```
### 实现二
利用哈希表对数组的元素进行计数，找出两个计数值为 1 的数。
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const hash = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        const key = nums[i]
        if (hash[key] === undefined) {
            hash[key] = 1
        } else {
            hash[key]++
        }
    }

    const result = []
    for (const key in hash) {
        if (hash[key] == 1) result.push(key)
    }

    return result
};
```
### 实现三
先对数组进行排序，遍历数组。如果当前值和下一个值相同，则 `index + 2` 继续判断。如果不相同，此值就是结果中的一个。
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b)
    const result = []
    const len = nums.length
    let i = 0
    while (i < len) {
        if (nums[i] == nums[i + 1]) {
            i += 2
        } else {
            result.push(nums[i])
            i++
        }
    }
    
    return result
};
```
