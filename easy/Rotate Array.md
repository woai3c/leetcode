# 旋转数组
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:
```
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
```
示例 2:
```
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
```
说明:

* 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
* 要求使用空间复杂度为 O(1) 的原地算法。

## 实现
[参考](https://www.jianshu.com/p/fbbe671331cf)
#### 实现1
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    if (len == 1 || len == k || k == 0) {
        return    
    }
    
    k = k % len
    while (k--) {
        const lastIndex = len - 1
        const lastVal = nums[lastIndex]
        for (let i = lastIndex; i > 0; i--) {
            nums[i] = nums[i - 1]
        }
        nums[0] = lastVal
    }
};
```

#### 实现2
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    if (len == 1 || len == k || k == 0) {
        return    
    }
    
    k = k % len
    nums.unshift(...nums.splice(len - k, k))
};
```
#### 实现3
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    if (len == 1 || len == k || k == 0) {
        return    
    }
    
    k = k % len

    let start = 0
    let end = len - 1 - k
    while (start < end) {
        const temp = nums[start]
        nums[start++] = nums[end]
        nums[end--] = temp
    }
    
    start = len - k
    end = len - 1
    while (start < end) {
        const temp = nums[start]
        nums[start++] = nums[end]
        nums[end--] = temp
    }
    
    nums.reverse()
};
```
#### 实现4
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const len = nums.length
    if (len == 1 || len == k || k == 0) {
        return    
    }
    
    k = k % len
    let currentIndex = 0
    let nextIndex = 0
    let currentNum = nums[0]
    
    for (let i = 0; i < len; i++) {
        nextIndex = (nextIndex + k) % len
        const temp = nums[nextIndex]
        nums[nextIndex] = currentNum
        if (currentIndex == nextIndex) {
            currentNum = nums[++nextIndex]
            currentIndex++
        } else {
            currentNum = temp
        }
    }
};
```
