# [503. 下一个更大元素 II](https://leetcode-cn.com/problems/next-greater-element-ii/)
给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

示例 1:
```
输入: [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
```
注意: 输入数组的长度不会超过 10000。

## 解法
```c++
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int len = nums.size();
        vector<int> result(nums.size(), - 1);
        stack<int> stack; // 栈存储的是索引
        // 将数组翻倍，主要是为了保证每个元素都能从剩下的元素中看看是否有比它大的
        for(int i = 0, doubleLen = 2 * len; i < doubleLen; i++) {
            // 单调递增栈
            // 在找到比当前栈顶元素大的数时，它就是下一个更大的元素
            // 将这个元素放到 result 中
            // 如果有元素没有找到比它更大的元素时，result 中的值就是 -1
            while(!stack.empty() && nums[stack.top()] < nums[i % len]) {
                result[stack.top()] = nums[i % len];
                stack.pop();
            }
                
            stack.push(i % len);
        }
        
        return result;
    }
};
```
