# [1481. 不同整数的最少数目](https://leetcode-cn.com/problems/least-number-of-unique-integers-after-k-removals/)
给你一个整数数组 arr 和一个整数 k 。现需要从数组中恰好移除 k 个元素，请找出移除后数组中不同整数的最少数目。

 

示例 1：
```
输入：arr = [5,5,4], k = 1
输出：1
解释：移除 1 个 4 ，数组中只剩下 5 一种整数。
```
示例 2：
```
输入：arr = [4,3,1,1,3,3,2], k = 3
输出：2
解释：先移除 4、2 ，然后再移除两个 1 中的任意 1 个或者三个 3 中的任意 1 个，最后剩下 1 和 3 两种整数。
```

提示：

* 1 <= arr.length <= 10^5
* 1 <= arr[i] <= 10^9
* 0 <= k <= arr.length
## 解法
1. 求出每个数字的个数
2. 按个数多少进行升序排序
3. 从个数少的开始对 k 进行相减操作
```c++
class Solution {
public:
    int findLeastNumOfUniqueInts(vector<int>& arr, int k) {
        unordered_map<int, int> hash;
        int len = arr.size();
        for (int num : arr) {
            hash[num]++;
        }

        vector<int> temp;
        for (auto pair : hash) {
            temp.push_back(pair.second);
        }

        sort(temp.begin(), temp.end());
        
        int result = temp.size();
        for (auto count : temp) {
            k -= count;
            if (k < 0) break;
            result--;
        }

        return result;
    }
};
```
