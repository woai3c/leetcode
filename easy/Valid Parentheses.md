# 有效的括号
给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

示例 1:
```
输入: "()"
输出: true
```
示例 2:
```
输入: "()[]{}"
输出: true
```
示例 3:
```
输入: "(]"
输出: false
```
示例 4:
```
输入: "([)]"
输出: false
```
示例 5:
```
输入: "{[]}"
输出: true
```

## 实现
#### 实现1
```js
// 词法分析
let i
let len
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) {
        return true
    }
    i = 0
    len = s.length
    if (len < 2) {
        return false
    }
    
    while (i < len) {
        switch (s[i]) {
            case '(':
                if (!common(s, ')')) {
                    return false
                }
                break
            case '[':
                if (!common(s, ']')) {
                    return false
                }
                break
            case '{':
                if (!common(s, '}')) {
                    return false
                }
                break
            default:
                return false
        }
        i++
    }

    return true
};

function process(s) {
    i++
    switch (s[i]) {
            case '(':
                if (!common(s, ')')) {
                    return false
                }
                break
            case '[':
                if (!common(s, ']')) {
                    return false
                }
                break
            case '{':
                if (!common(s, '}')) {
                    return false
                }
                break
            default:
                return false
        }
    
    return true
}

function common(s, symbol) {
    if (s[i + 1] == symbol) {
        i++
    } else {
        while (s[i + 1] != symbol) {
            if (i >= len || !process(s)) {
                return false
            }
        }
        i++
    }

    return true
}
```

#### 实现2
```js
// 栈
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) {
        return true
    }

    const stack = []
    const obj = {'(':')', '[':']', '{':'}'}
    let last = obj[s[0]]
    stack.push(last)

    for (let i = 1, len = s.length; i < len; i++) {
        const temp = s[i]
        if (last == temp) {
            stack.pop()
            last = stack[stack.length - 1]
        } else {
            const val = obj[temp]
            stack.push(val)
            last = val
        }
    }

    return stack.length == 0
};
```
