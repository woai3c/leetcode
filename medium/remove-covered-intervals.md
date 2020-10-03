# [1288. 删除被覆盖区间](https://leetcode-cn.com/problems/remove-covered-intervals/)
给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。

只有当 c <= a 且 b <= d 时，我们才认为区间 [a,b) 被区间 [c,d) 覆盖。

在完成所有删除操作后，请你返回列表中剩余区间的数目。

 

示例：
```
输入：intervals = [[1,4],[3,6],[2,8]]
输出：2
解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。
```

提示：

* 1 <= intervals.length <= 1000
* 0 <= intervals[i][0] < intervals[i][1] <= 10^5
* 对于所有的 i != j：intervals[i] != intervals[j]
## 解法
```c++
class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& intervals) {
        if (!intervals.size()) return 0;
        // 1. 将数组按每个元素的左区间进行升序排序
        // 例如 [[1,4] [2,3]]，这样只需比较每个元素的右区间
        // 如果上一个元素的右区间大于等于下一个元素的右区间，则符合覆盖的条件
        // 2. 如果元素的左区间相等，则将右区间较大的元素放在前端
        // 这样就和条件 1 中的判断条件一样
        sort(intervals.begin(), intervals.end(), [](vector<int> &a, vector<int> &b) {
            return a[0] != b[0]? a[0] < b[0] : a[1] > b[1];
        });

        int result = 0;
        int pre = 0;
        // 依据上面两个条件，现在只需比较每个元素的右区间
        for (int i = 0, len = intervals.size(); i < len; i++) {
            // 遇到不能覆盖的元素，说明它是当前的最大右区间
            // 所以要保留这个最大右区间的值，用来进行下次对比
            // 例如 1,4  2,8  3,6
            if (pre < intervals[i][1]) {
                result++;
                pre = intervals[i][1];
            }
        }

        return result;
    }
};
```
