# [65. 有效数字](https://leetcode-cn.com/problems/valid-number/)
验证给定的字符串是否可以解释为十进制数字。

例如:
```
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false
```
说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。这里给出一份可能存在于有效十进制数字中的字符列表：

* 数字 0-9
* 指数 - "e"
* 正/负号 - "+"/"-"
* 小数点 - "."

当然，在输入中，这些字符的上下文也很重要。
## 解法
[表驱动法](https://leetcode-cn.com/problems/valid-number/solution/biao-qu-dong-fa-by-user8973/)
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    const states = [0, 0, 0, 1, 0, 1, 1, 0, 1]
    const table = [
        [ 0, 1, 6, 2,-1,-1],
        [-1,-1, 6, 2,-1,-1],
        [-1,-1, 3,-1,-1,-1],
        [ 8,-1, 3,-1, 4,-1],
        [-1, 7, 5,-1,-1,-1],
        [ 8,-1, 5,-1,-1,-1],
        [ 8,-1, 6, 3, 4,-1],
        [-1,-1, 5,-1,-1,-1],
        [ 8,-1,-1,-1,-1,-1]
    ]

    let state = 0
    for (let i = 0, len = s.length; i < len; i++) {
        state = table[state][getState(s[i])]
        if (state == -1) return false
    }

    return states[state]
};

function getState(c) {
    switch (c) {
        case ' ':
            return 0
        case '+':
        case '-':
            return 1
        case '.':
            return 3
        case 'e':
            return 4
    }

    if (/\d/.test(c)) return 2
    return 5
}
```
