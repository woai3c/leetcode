# [75. 颜色分类](https://leetcode-cn.com/problems/sort-colors/)
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:

不能使用代码库中的排序函数来解决这道题。

示例:
```
输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
```
进阶：

* 一个直观的解决方案是使用计数排序的两趟扫描算法。首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
* 你能想出一个仅使用常数空间的一趟扫描算法吗？
## 解法
### 解一
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    const len = nums.length
    let nextZeroIndex = 0 // 下一个 0 应该放置的位置
    let nextTwoIndex = len - 1 // 下一个 2 应该放置的位置
    let i = 0
    while (i <= nextTwoIndex) {
        if (nums[i] == 0) {
            if (i != nextZeroIndex) {
                exchange(nums, nextZeroIndex, i)
            }

            nextZeroIndex++
            i++
        } else if (nums[i] == 2) {
            while (nums[nextTwoIndex] == 2 && nextTwoIndex >= 0) {
                nextTwoIndex--
            }
            
            if (i >= nextTwoIndex) return
            exchange(nums, nextTwoIndex, i)
            nextTwoIndex--
        } else {
            i++
        }
    }
};

function exchange(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
```
### 解二
[官方题解](https://leetcode-cn.com/problems/sort-colors/solution/yan-se-fen-lei-by-leetcode/)，我的思路和官方题解一样，实现有点不同。

用官方题解再做一遍
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    const len = nums.length
    let nextZeroIndex = 0 // 下一个 0 应该放置的位置
    let nextTwoIndex = len - 1 // 下一个 2 应该放置的位置
    let i = 0
    while (i <= nextTwoIndex) {
        if (nums[i] == 0) {
            exchange(nums, nextZeroIndex, i)
            nextZeroIndex++
            i++
        } else if (nums[i] == 2) {
            exchange(nums, nextTwoIndex, i)
            nextTwoIndex--
        } else {
            i++
        }
    }
};

function exchange(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
```
