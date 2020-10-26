# [1190. 反转每对括号间的子串](https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/)
给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。

 

示例 1：
```
输入：s = "(abcd)"
输出："dcba"
```
示例 2：
```
输入：s = "(u(love)i)"
输出："iloveu"
```
示例 3：
```
输入：s = "(ed(et(oc))el)"
输出："leetcode"
```
示例 4：
```
输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"
```

提示：

* 0 <= s.length <= 2000
* s 中只有小写英文字母和括号
* 我们确保所有括号都是成对出现的
## 解法
遍历字符串，用一个 `cur` 变量保存当前正在遍历的字符串，默认为空。

同时用一个栈来维护已经遍历过的字符串，进栈规则为：如果当前遍历的字符串为 `(`，就将 `cur` 进栈。

出栈规则为：如果当前遍历的字符串为 `)`，就将 `cur` 反转，并且将栈顶元素和 `cur` 拼接在一起，变成新的 `cur`：`cur = stack.top() + cur;`。

```cpp
class Solution {
public:
    string reverseParentheses(string s) {
        stack<string> stack;
        string cur;
        for (char c : s) {
            if (c == '(') {
                stack.push(cur);
                cur = "";
            } else if (c == ')') {
                reverse(cur.begin(), cur.end());
                cur = stack.top() + cur;
                stack.pop();
            } else {
                cur += c;
            }
        }

        return cur;
    }
};
```
