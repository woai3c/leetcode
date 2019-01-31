# 最短无序连续子数组
给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。

示例 1:
```
输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```
说明 :

1. 输入的数组长度范围在 [1, 10,000]。
2. 输入的数组可能包含重复元素 ，所以升序的意思是<=。

## 实现
#### 实现1

```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let start = 0
    let len = nums.length - 1
    let end = len
    let isEdit = false
    
    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[i + 1]) {
            start = i
            isEdit = true
            break
        }
    }
    
    for (let i = end; i > 0; i--) {
        if (nums[i] < nums[i - 1]) {
            end = i
            isEdit = true
            break
        } 
    }
    
    const subArry = nums.slice(start, end + 1)
    const min = Math.min(...subArry)
    const max = Math.max(...subArry)

    while (start > 0) {
        if (min < nums[start - 1]) {
            start--
        } else {
            break
        }
    }

    while (end < len) {
        if (max > nums[end + 1]) {
            end++
        } else {
            break
        }
    }
    
    if (isEdit) {
        return end - start + 1
    }
    
    return 0
};
```
#### 实现2
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let start = 0
    let len = nums.length
    let end = - 1
    let max = nums[0]
    let min = nums[len - 1]
    const minf = Math.min
    const maxf = Math.max
    
    for (let i = 0; i < len; i++) {
        let last = len - 1 - i
        let val1 = nums[i]
        let val2 = nums[last]
        
        min = minf(min, val2)
        max = maxf(max, val1)
        
        if (max > val1) {
            end = i
        }
        
        if (min < val2) {
            start = last
        }
    }
    
    return end - start + 1
};
```

#### 实现3
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const newArry = nums.slice()
    newArry.sort((a, b) => a - b)

    let isEdit = false    
    let len = nums.length
    let start = 0
    let end = len - 1
    
    for (let i = 0; i < len; i++) {
        if (newArry[i] != nums[i]) {
            start = i
            isEdit = true
            break
        }
    }
    
    for (let i = len - 1; i >= 0; i--) {
        if (newArry[i] != nums[i]) {
            end = i
            isEdit = true
            break
        }
    }
    
    if (isEdit) {
        return end - start + 1
    }
    
    return 0
};
```
