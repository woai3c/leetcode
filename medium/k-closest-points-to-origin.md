# [973. 最接近原点的 K 个点](https://leetcode-cn.com/problems/k-closest-points-to-origin/)
我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。

（这里，平面上两点之间的距离是欧几里德距离。）

你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。

 

示例 1：
```
输入：points = [[1,3],[-2,2]], K = 1
输出：[[-2,2]]
解释： 
(1, 3) 和原点之间的距离为 sqrt(10)，
(-2, 2) 和原点之间的距离为 sqrt(8)，
由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
```
示例 2：
```
输入：points = [[3,3],[5,-1],[-2,4]], K = 2
输出：[[3,3],[-2,4]]
（答案 [[-2,4],[3,3]] 也会被接受。）
```

提示：

* 1 <= K <= points.length <= 10000
* -10000 < points[i][0] < 10000
* -10000 < points[i][1] < 10000
## 解法
快排

JS
```js
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
 var kClosest = function(points, K) {
    quickSort(points, K)
    return points.slice(0, K)
};

function quickSort(arr, K) {
    sort(arr, 0, arr.length - 1, K)
}

function sort(arr, start, end, K) {
    if (start >= end) return
    const index = segment(arr, start, end)
    // 只对前 K 个数进行排序
    sort(arr, start, index - 1, K)
    if (K > index) {
        sort(arr, index + 1, end, K)
    }
}

function segment(arr, start, end) {
    let i = start, j = end + 1
    const val = getDistance(arr[start])
    while (i < j) {
        while (getDistance(arr[++i]) < val) {
            if (i == end) break
        }
        
        while (getDistance(arr[--j]) > val) {
            if (j == start) break
        }
        
        if (i >= j) break
        swap(arr, i, j)
    }

    swap(arr, start, j)
    return j
}

function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function getDistance(point) {
    return point[0] ** 2 + point[1] ** 2
}
```
C++
```c++
class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int K) {
        quickSort(points, K);
        return vector<vector<int>>(points.begin(), points.begin() + K);
    }

    void quickSort(vector<vector<int>>& points, int K) {
        sort(points, 0, points.size() - 1, K);
    }

    void sort(vector<vector<int>>& points, int start, int end, int K) {
        if (start >= end) return;
        int index = segment(points, start, end);
        // 只对前 K 个数进行排序
        sort(points, start, index - 1, K);
        if (K > index) {
            sort(points, index + 1, end, K);
        }
    }

    int segment(vector<vector<int>>& points, int start, int end) {
        int i = start, j = end + 1;
        int val = getDistance(points[start]);
        while (i < j) {
            while (getDistance(points[++i]) < val) {
                if (i == end) break;
            }
            
            while (getDistance(points[--j]) > val) {
                if (j == start) break;
            }
            
            if (i >= j) break;
            swap(points, i, j);
        }

        swap(points, start, j);
        return j;
    }

    void swap(vector<vector<int>>& points, int i, int j) {
        vector<int> temp = points[i];
        points[i] = points[j];
        points[j] = temp;
    }

    int getDistance(vector<int>& point) {
        return point[0] * point[0] + point[1] * point[1];
    }
};
```
