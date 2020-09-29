# [面试题 17.14. 最小K个数](https://leetcode-cn.com/problems/smallest-k-lcci/)
设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

示例：
```
输入： arr = [1,3,5,7,2,4,6,8], k = 4
输出： [1,2,3,4]
```
提示：

* 0 <= len(arr) <= 100000
* 0 <= k <= min(100000, len(arr))
## 解法
快排，只对前 k 个数进行排序
```c++
class Solution {
public:
    vector<int> smallestK(vector<int>& arr, int k) {
        quickSort(arr, k);
        return vector<int>(arr.begin(), arr.begin() + k);
    }

    void quickSort(vector<int>& arr, int k) {
        sort(arr, 0, arr.size() - 1, k);
    }

    void sort(vector<int>& arr, int start, int end, int k) {
        if (start >= end) return;
        int index = segment(arr, start, end, k);
        if (index >= k - 1) {
            // 如果 k 小于等于 index，则只需要对 index 前面的数排序
            sort(arr, start, index - 1, k);
        } else {
            // 如果 k 大于 index，说明 index 前面的数都是小于 arr[k] 的
            // 由于可以以任意顺序返回 k 个数，所以 index 前面的数不需要排序
            sort(arr, index + 1, end, k);
        }
    }

    int segment(vector<int>& arr, int start, int end, int k) {
        int val = arr[start];
        int i = start, j = end + 1;
        while (i < j) {
            while (i < end && arr[++i] < val);
            while (j > start && arr[--j] > val);
            if (i >= j) break;
            swap(arr, i, j);
        }

        swap(arr, start, j);
        return j;
    }

    void swap(vector<int>& arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};
```
归并排序只能全排列
```c++
class Solution {
public:
    vector<int> smallestK(vector<int>& arr, int k) {
        mergeSort(arr, k);
        return vector<int>(arr.begin(), arr.begin() + k);
    }

    void mergeSort(vector<int>& arr, int k) {
        sort(arr, 0, arr.size() - 1, k);
    }

    void sort(vector<int>& arr, int start, int end, int k) {
        if (start >= end) return;
        int mid = start + (end - start) / 2;
        sort(arr, start, mid, k);
        sort(arr, mid + 1, end, k);
        if (arr[mid] <= arr[mid + 1]) return;
        merge(arr, start, mid, end);
    }

    void merge(vector<int>& arr, int start, int mid, int end) {
        vector<int> temp;
        int i = start, j = mid + 1;
        int k = start;
        while (k <= end) {
            if (j > end) {
                temp.push_back(arr[i++]);
            } else if (i > mid) {
                temp.push_back(arr[j++]);
            } else if (arr[i] <= arr[j]) {
                temp.push_back(arr[i++]);
            } else {
                temp.push_back(arr[j++]);
            }

            k++;
        }

        for (int i = 0, len = temp.size(); i < len; i++) {
            arr[start++] = temp[i];
        }
    }
};
```
堆排序，小顶堆，只对前 k 个数进行排序。
```c++
class Solution {
public:
    vector<int> smallestK(vector<int>& arr, int k) {
        heapSort(arr, k);
        return vector<int>(arr.rbegin(), arr.rbegin() + k);
    }

    void heapSort(vector<int>& arr, int k) {
        int len = arr.size();
        int maxIndex = len - 1;
        for (int i = len / 2 - 1; i >= 0; i--) {
            sink(arr, i, maxIndex);
        }

        while (maxIndex >= 0) {
            swap(arr, 0, maxIndex);
            maxIndex--;
            sink(arr, 0, maxIndex);
            if (--k == 0) return;
        }
    }

    void sink(vector<int>& arr, int i, int maxIndex) {
        while (i * 2 + 1 <= maxIndex) {
            int j = i * 2 + 1;
            if (j < maxIndex && arr[j] > arr[j + 1]) {
                j++;
            }

            if (arr[i] < arr[j]) break;
            swap(arr, i, j);
            i = j;
        }
    }

    void swap(vector<int>& arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
};
```
