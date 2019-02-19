# 存在重复元素 II
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 **nums [i] = nums** [j]，**并且 i 和 j 的差的绝对值最大为 k**。

示例 1:
```
输入: nums = [1,2,3,1], k = 3
输出: true
```
示例 2:
```
输入: nums = [1,0,1,1], k = 1
输出: true
```
示例 3:
```
输入: nums = [1,2,3,1,2,3], k = 2
输出: false
```

## 实现
#### 实现1
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let len = nums.length
    for (let i = 0, l = len - 1; i < l; i++) {
        let ll = len > i + k? i + k + 1 : len 
        
        for (let j = i + 1; j < ll; j++) {
            if (nums[i] == nums[j]) {
                if (Math.abs(j - i) <= k) {
                    return true
                }
            }
        }
    }
    
    return false
};
```

#### 实现2
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hash = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        let key = nums[i]
        let index = hash[key]
        if (index !== undefined && i - index <= k) {
            return true
        }
        
        hash[key] = i
    }
    
    return false
};
```
#### 实现3
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set()
    for (let i = 0, len = nums.length; i < len; i++) {
        let val = nums[i]
        if (set.has(val)) {
            return true
        }
        
        set.add(val)
        
        if (set.size == k + 1) {
            set.delete(nums[i - k])
        }
        
    }
    
    return false
};
```
#### 实现4
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 1, len = nums.length; i < len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                break
            } else if (nums[i] == nums[j]) {
                if (i - j <= k) {
                    return true
                }
            }
        }
    }
    
    return false
};
```
