# [1509. 三次操作后最大值与最小值的最小差](https://leetcode-cn.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/)
给你一个数组 nums ，每次操作你可以选择 nums 中的任意一个元素并将它改成任意值。

请你返回三次操作后， nums 中最大值与最小值的差的最小值。

 

示例 1：
```
输入：nums = [5,3,2,4]
输出：0
解释：将数组 [5,3,2,4] 变成 [2,2,2,2].
最大值与最小值的差为 2-2 = 0 。
```
示例 2：
```
输入：nums = [1,5,0,10,14]
输出：1
解释：将数组 [1,5,0,10,14] 变成 [1,1,0,1,1] 。
最大值与最小值的差为 1-0 = 1 。
```
示例 3：
```
输入：nums = [6,6,0,1,1,4,6]
输出：2
```
示例 4：
```
输入：nums = [1,5,6,14,15]
输出：1
```

提示：

* 1 <= nums.length <= 10^5
* -10^9 <= nums[i] <= 10^9

## 解法
由于是求最大值与最小值的最小差值，所以要尽量让最大值和最小值接近。
```
1 2 3 4 5 6 7 8 9 10
```
用上面的例子来做参考：
1. 如果不能修改值，直接用最大值减去最小值就是结果 `10 - 1`。
2. 如果能修改一个值，就有两种可能：`10 - 2` `9 - 1`。
3. 如果能修改两个值，就有三种可能：`10 - 3` `9 - 2` `8 - 1`。
4. 如果能修改三个值，就有四种可能：`10 - 4` `9 - 3` `8 - 2` `7 - 1`。

比较所有的可能值，取其中最小的值就是结果。

根据以上的分析可以得出答案：
```c++
class Solution {
public:
    int minDifference(vector<int>& nums) {
        if (nums.size() <= 4) return 0;
        // 先对数组排序
        sort(nums.begin(), nums.end());
        int lastIndex = nums.size() - 1;
        int result = 2e9;
        for (int i = 3; i >= 0; i--) {
            result = min(result, nums[lastIndex--] - nums[i]);
        }

        return result;
    }
};
```
