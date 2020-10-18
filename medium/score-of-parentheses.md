# [856. 括号的分数](https://leetcode-cn.com/problems/score-of-parentheses/)
给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

* () 得 1 分。
* AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
* (A) 得 2 * A 分，其中 A 是平衡括号字符串。
 

示例 1：
```
输入： "()"
输出： 1
```
示例 2：
```
输入： "(())"
输出： 2
```
示例 3：
```
输入： "()()"
输出： 2
```
示例 4：
```
输入： "(()(()))"
输出： 6
```
 

提示：

* S 是平衡括号字符串，且只含有 ( 和 ) 。
* 2 <= S.length <= 50
## 解法
[finnwu-题解](https://leetcode-cn.com/problems/score-of-parentheses/solution/kan-bu-dong-bie-ren-de-ti-jie-zi-ji-you-xie-liao-y/)

TS
```ts
function scoreOfParentheses(S: string): number {
    const stack: any = []
    for (const c of S) {
        if (c == '(') {
            stack.push(c)
            continue
        }

        // )
        if (stack[stack.length - 1] == '(') {
            stack.pop()
            stack.push(1)
        } else {
            let temp: number = 0
            while (stack[stack.length - 1] != '(') {
                temp += stack.pop()
            }

            stack.pop()
            stack.push(temp * 2)
        }
    }

    return stack.reduce((sum: number, cur: number) => sum + cur)
};
```
C++
```c++
class Solution {
public:
    int scoreOfParentheses(string S) {
        vector<int> stack;
        for (char c : S) {
            // 用 0 代替 (
            if (c == '(') {
                stack.push_back(0);
                continue;
            }

            // )
            if (stack.back() == 0) {
                stack.pop_back();
                stack.push_back(1);
            } else {
                int sum = 0;
                while (stack.back() != 0) {
                    sum += stack.back();
                    stack.pop_back();
                }

                stack.pop_back();
                stack.push_back(sum * 2);
            }
        }

        int result = 0;
        for (int n : stack) result += n;
        return result;
    }
};
```
