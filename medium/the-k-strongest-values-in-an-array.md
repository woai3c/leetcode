# [1471. 数组中的 k 个最强值](https://leetcode-cn.com/problems/the-k-strongest-values-in-an-array/)
给你一个整数数组 arr 和一个整数 k 。

设 m 为数组的中位数，只要满足下述两个前提之一，就可以判定 arr[i] 的值比 arr[j] 的值更强：

* |arr[i] - m| > |arr[j] - m|
* |arr[i] - m| == |arr[j] - m|，且 arr[i] > arr[j]

请返回由数组中最强的 k 个值组成的列表。答案可以以 任意顺序 返回。

中位数 是一个有序整数列表中处于中间位置的值。形式上，如果列表的长度为 n ，那么中位数就是该有序列表（下标从 0 开始）中位于 ((n - 1) / 2) 的元素。

* 例如 arr = [6, -3, 7, 2, 11]，n = 5：数组排序后得到 arr = [-3, 2, 6, 7, 11] ，数组的中间位置为 m = ((5 - 1) / 2) = 2 ，中位数 arr[m] 的值为 6 。
* 例如 arr = [-7, 22, 17, 3]，n = 4：数组排序后得到 arr = [-7, 3, 17, 22] ，数组的中间位置为 m = ((4 - 1) / 2) = 1 ，中位数 arr[m] 的值为 3 。
 

示例 1：
```
输入：arr = [1,2,3,4,5], k = 2
输出：[5,1]
解释：中位数为 3，按从强到弱顺序排序后，数组变为 [5,1,4,2,3]。最强的两个元素是 [5, 1]。[1, 5] 也是正确答案。
注意，尽管 |5 - 3| == |1 - 3| ，但是 5 比 1 更强，因为 5 > 1 。
```
示例 2：
```
输入：arr = [1,1,3,5,5], k = 2
输出：[5,5]
解释：中位数为 3, 按从强到弱顺序排序后，数组变为 [5,5,1,1,3]。最强的两个元素是 [5, 5]。
```
示例 3：
```
输入：arr = [6,7,11,7,6,8], k = 5
输出：[11,8,6,6,7]
解释：中位数为 7, 按从强到弱顺序排序后，数组变为 [11,8,6,6,7,7]。
[11,8,6,6,7] 的任何排列都是正确答案。
```
示例 4：
```
输入：arr = [6,-3,7,2,11], k = 3
输出：[-3,11,2]
```
示例 5：
```
输入：arr = [-7,22,17,3], k = 2
输出：[22,17]
```
 

提示：

* 1 <= arr.length <= 10^5
* -10^5 <= arr[i] <= 10^5
* 1 <= k <= arr.length
## 解法
### 解一
```c++
int m;
class Solution {
public:
    static bool helper(int a, int b) {
        int diffA = abs(a - m);
        int diffB = abs(b - m);
        if (diffA == diffB) return a > b;
        return diffA > diffB;
    }

    vector<int> getStrongest(vector<int>& arr, int k) {
        nth_element(arr.begin(), arr.begin() + (arr.size() - 1) / 2, arr.end());
        m = arr[(arr.size() - 1) / 2];
        sort(arr.begin(), arr.end(), helper);
        return vector<int>(arr.begin(), arr.begin() + k);
    }
};
```
### 解二
先将数组升序排序。

由于是求每个元素与中位数的差的绝对值，所以对于有序数组来说，左右两边边界就是最强值。

因此从左右两边开始，找到满足条件的 k 个数即可。
```c++
class Solution {
public:
    vector<int> getStrongest(vector<int>& arr, int k) {
        sort(arr.begin(), arr.end());
        int m = arr[(arr.size() - 1) / 2];

        vector<int> result;
        int left = 0;
        int right = arr.size() - 1;
        while (k--) {
            int lval = abs(arr[left] - m);
            int rval = abs(arr[right] - m);
            // 由于是升序数组，右边的值肯定比左边的值大
            // 所以 lval == rval，直接取最右边的值
            if (lval > rval) {
                result.push_back(arr[left++]);
            } else {
                result.push_back(arr[right--]);
            }
        }

        return result;
    }
};
```
