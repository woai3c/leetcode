# [32. 最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/)
给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

示例 1:
```
输入: "(()"
输出: 2
解释: 最长有效括号子串为 "()"
```
示例 2:
```
输入: ")()())"
输出: 4
解释: 最长有效括号子串为 "()()"
```
## 解法
### 解一
* 用栈来维护左括号的索引
* 用一个 mark 数组来对应 s 中的每一位，初始值为 0
* mark 数组中连续 0 的最大长度即为有效括号的最大长度
* 例如: "()(()"的 mark 为 [0, 0, 1, 0, 0]
* 再例如: ")()((())"的 mark 为 [1, 0, 0, 1, 0, 0, 0, 0]

```js
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // 用栈来维护左括号的索引
    const stack = []
    // 用一个 mark 数组来对应 s 中的每一位，初始值为 0
    const mark = new Array(s.length).fill(0)
    
    // 遇到 '(' 时，将对应的索引推入到 stack
    // 遇到 ')' 时，当 stack 长度不为 0，执行 stack.pop()，否则将对应的位置置 1，mark[i] = 1。
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else if (s[i] == ')') {
            if (stack.length) {
                stack.pop()
            } else {
                mark[i] = 1
            }
        }
    }
    // 如果有多出来的左括号，将对应的索引置 1
    while (stack.length) {
        mark[stack.pop()] = 1
    }

    let max = 0
    let count = 0
    // mark 数组中连续 0 的最大长度即为有效括号的最大长度
    // 例如: "()(()"的mark为[0, 0, 1, 0, 0]
    // 再例如: ")()((())"的mark为[1, 0, 0, 1, 0, 0, 0, 0]
    for (let i = 0, len = mark.length; i < len; i++) {
        if (mark[i] == 0) {
            count++
        } else {
            max = Math.max(max, count)
            count = 0
        }
    }

    return Math.max(max, count)
};
```
### 解二
* 用 left right 记录左右括号的索引。遇到左括号 left++，遇到右括号 right++。
* 当 left == right，获取当前的括号字符串长度，并和历史最大值作比较。
* 当 right > left时，重置 left = right = 0，需要重新计算，避免了 '())()' 这种情况。

这种方法无法计算 '(()' 的长度，所以需要倒序再来一遍，这次的规则和上面一样，只不过 left 和 right 的规则反过来。
```js
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let left = 0
    let right = 0
    let max = 0
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] == '(') {
            left++
        } else {
            right++
        }

        if (left == right) {
            max = Math.max(max, left * 2)
        } else if (right > left) {
            left = right = 0
        }
    }

    left = right = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '(') {
            left++
        } else {
            right++
        }

        if (left == right) {
            max = Math.max(max, left * 2)
        } else if (right < left) {
            left = right = 0
        }
    }

    return max
};
```
