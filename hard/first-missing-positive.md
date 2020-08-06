# [41. 缺失的第一个正数](https://leetcode-cn.com/problems/first-missing-positive/)
给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

 

示例 1:
```
输入: [1,2,0]
输出: 3
```
示例 2:
```
输入: [3,4,-1,1]
输出: 2
```
示例 3:
```
输入: [7,8,9,11,12]
输出: 1
```
 
提示：

* 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。
## 解法
由于是求最小正整数，那假设数组的长度为 10，则它的最小正整数顺序为 1-10。

如果这 10 个数都存在，那最小正整数就是 11；如果有一个数不存在，那就返回不存在的那个数。

利用这一规则，我们可以在遍历数组时，将 nums[i] 的值放到对应的索引上去。如果 nums[i] 的值小于 1 或大于数组的长度，则不动。

例如有这么一个数组：
```js
[3,-2,9,4,12]
```
由于 3 是符合要求的数，所以将它和第 3 个数交换：`exchange(nums, i, nums[i] - 1)`，交换后如下：
```js
[9,-2,3,4,12]
```
1. 交换后，再看 9，不符合要求，不动它，继续遍历。
2. -2，不动。
3. 3，在它应该在的位置，不动。
4. 4，在它应该在的位置，不动。
5. 12，不符合要求，不动。

然后再进行一次遍历，找到第一个和它的位置不对称的数，就是我们要找的数。

上面这个示例，返回的是 1。因为 9 和它的位置不对称，第一个索引对应的应该是 1。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for (let i = 0, len = nums.length; i < len; i++) {
        const val = nums[i]
        if (val - 1 == i) continue
        // 大小必须在 [1, num.length] 并且不能重复
        if (val >= 1 && val <= len && val != nums[val - 1]) {
            exchange(nums, i, val - 1)
            i--
        }
    }

    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] - 1 != i) return i + 1
    }

    return nums.length + 1
};

function exchange(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
```
