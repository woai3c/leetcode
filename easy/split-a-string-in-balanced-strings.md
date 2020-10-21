# [1221. 分割平衡字符串](https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/)
在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

返回可以通过分割得到的平衡字符串的最大数量。

 

示例 1：
```
输入：s = "RLRRLLRLRL"
输出：4
解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。
```
示例 2：
```
输入：s = "RLLLLRRRLR"
输出：3
解释：s 可以分割为 "RL", "LLLRRR", "LR", 每个子字符串中都包含相同数量的 'L' 和 'R'。
```
示例 3：
```
输入：s = "LLLLRRRR"
输出：1
解释：s 只能保持原样 "LLLLRRRR".
```

提示：

* 1 <= s.length <= 1000
* s[i] = 'L' 或 'R'
* 分割得到的每个字符串都必须是平衡字符串。
## 解法
平衡字符串是左右对称的，有多少个 L，就有多少个 R。

我们可以用一个变量 count 作为计数器，遇到 L，就加 1，遇到 R，就减 1。

当 count 为 0 时，说明遇到的 L 和 R 刚好抵消掉，符合平衡字符串的定义。
```c++
class Solution {
public:
    int balancedStringSplit(string s) {
        int result = 0;
        int count = 0;
        for (char c : s) {
            if (c == 'L') {
                count++;
            } else {
                count--;
            }

            if (count == 0) result++;
        }

        return result;
    }
};
```
