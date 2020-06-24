# [239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。


进阶：

你能在线性时间复杂度内解决此题吗？

示例:
```
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```
 
提示：

* 1 <= nums.length <= 10^5
* -10^4 <= nums[i] <= 10^4
* 1 <= k <= nums.length

### 实现1
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums || !nums.length) return []
    const result = []
    let maxNum = nums[0]
    let maxNumIndex = 0
    let isFirst = true
    // 每移动一次只需将上一次 K 个数中的最大值和最新索引的值对比，将大的值推入结果中。
    for (let i = 0, len = nums.length; i <= len - k; i++) {
        if (!isFirst && maxNum > nums[i + k - 1] && maxNumIndex >= i) {
            result.push(maxNum)
        } else {
            if (maxNumIndex < i) {
                maxNum = nums[i]
                maxNumIndex = i
            }

            for (let j = i, l = i + k; j < l; j++) {
                if (maxNum < nums[j]) {
                    maxNum = nums[j]
                    maxNumIndex = j
                }
            }

            result.push(maxNum)
        }

        isFirst = false
    }

    return result
};
```
