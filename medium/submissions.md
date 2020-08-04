# [31. 下一个排列](https://leetcode-cn.com/problems/next-permutation/submissions/)
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
```
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
```
## 解法
### 解法一
先倒序遍历，找到第一个比前一个数大的数，并记录这个索引。再对这个索引之后的数进行升序排序。
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let index
    const arr = []
    const lastIndex = nums.length - 1
    // 倒序遍历，每次遍历需要把已经遍历过的数和前一个数作比较
    // 假设有 [4,2,0,2,3,2,0]
    // 先比较 0 和 2，0 比 2 小，继续比较
    // 由于 0 已经遍历过了，所以下一次 2 和 3 比较，实际上是 [0, 2] 和 3 比较
    // [0, 2] 都比 3 小，继续下一轮，这次是 [0, 2, 3] 和 2 比较
    // 其中 3 比 2 大，所以交换顺序，变成 [4,2,0,3,2,2,0]
    // 记录交换的这个索引，接下来从这个索引开始正序遍历，对它后面的数进行升序排序
    out: for (let i = lastIndex; i > 0; i--) {
        arr.push(nums[i])
        for (let j = 0, l = arr.length; j < l; j++) {
            if (arr[j] > nums[i - 1]) {
                exchange(nums, lastIndex - j, i - 1)
                index = i - 1
                break out
            }
        }
    }
    
    let start
    if (index !== undefined) {
        // 对 index 后面的数进行升序排序，index 后面的其实也是一个降序数组
        start = index + 1
    } else {
        // 没有交换发生说明是一个降序数组
        start = 0
    }

    let j = nums.length - 1
    // 对于一个降序排列的数组来说，直接从左右两端开始交换值，就变成了升序排序
    while (start < j) {
        exchange(nums, start, j)
        start++
        j--
    }
};

function exchange(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
```
### 解法二
官方题解的思路也是一样，先交换，再对交换索引后面的数进行升序排序。不过处理手法更加巧妙，具体看图：

![](https://pic.leetcode-cn.com/1df4ae7eb275ba4ab944521f99c84d782d17df804d5c15e249881bafcf106173-file_1555696082944)
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    let i = nums.length - 2
    // 倒序遍历，找到第一个比前面大的数
    while (i >= 0 && nums[i + 1] <= nums[i]) {
        i--
    }

    if (i >= 0) {
        let j = nums.length - 1
        // 倒序遍历，找到第一个比 nums[i] 大的数
        while (i < j && nums[j] <= nums[i]) {
            j--
        }

        exchange(nums, i, j)
    }
    
    // 对 i 后面的数进行升序排序
    // 对于一个降序排列的数组来说，直接从左右两端开始交换值，就变成了升序排序
    let start = i + 1
    j = nums.length - 1
    while (start < j) {
        exchange(nums, start, j)
        start++
        j--
    }
};

function exchange(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
```
