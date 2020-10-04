# [509. 斐波那契数](https://leetcode-cn.com/problems/fibonacci-number/)
斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

* F(0) = 0,   F(1) = 1
* F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

给定 N，计算 F(N)。

 

示例 1：
```
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
```
示例 2：
```
输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
```
示例 3：
```
输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
```
 

提示：

* 0 ≤ N ≤ 30
## 解法
```c++
class Solution {
public:
    int fib(int N) {
        if (N == 0) return 0;
        if (N == 1) return 1;
        int pre2 = 0, pre1 = 1, result = 1;
        for (int i = 2; i <= N; i++) {
            result = pre1 + pre2;
            pre2 = pre1;
            pre1 = result;
        }

        return result;
    }
};
```
