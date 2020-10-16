# [739. 每日温度](https://leetcode-cn.com/problems/daily-temperatures/)
请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
## 解法
[官方题解](https://leetcode-cn.com/problems/daily-temperatures/solution/mei-ri-wen-du-by-leetcode-solution/)
### 暴力
```c++
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& T) {
        vector<int> result(T.size()), next(101, INT_MAX);
        for (int i = T.size() - 1; i >= 0; i--) {
            int minIndex = INT_MAX;
            for (int t = T[i] + 1; t <= 100; t++) {
                minIndex = min(minIndex, next[t]);
            }

            if (minIndex != INT_MAX) {
                result[i] = minIndex - i;
            }

            next[T[i]] = i;
        }

        return result;
    }
};
```
### 单调栈
```c++
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& T) {
        stack<int> s;
        vector<int> result(T.size()); 
        for (int i = 0, len = T.size(); i < len; i++) {
            while (!s.empty() && T[s.top()] < T[i]) {
                int preIndex = s.top();
                result[preIndex] = i - preIndex;
                s.pop();
            }

            s.push(i);
        }

        return result;
    }
};
```
