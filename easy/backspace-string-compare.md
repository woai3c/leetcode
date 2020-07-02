# [844. 比较含退格的字符串](https://leetcode-cn.com/problems/backspace-string-compare/)
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：
```
输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
```
示例 2：
```
输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
```
示例 3：
```
输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
```
示例 4：
```
输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
```

提示：
* 1 <= S.length <= 200
* 1 <= T.length <= 200
* S 和 T 只含有小写字母以及字符 '#'。
 

进阶：
* 你可以用 O(N) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？

## 解法
### 实现1
重构字符串，如果当前字符是 '#'，就把上一个字符给弹出来。
```js
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    return getStr(S) == getStr(T)
};

function getStr(S) {
    const result = []
    for (let i = 0, len = S.length; i < len; i++) {
        if (S[i] == '#' && result.length) {
            result.pop()
        } else if (S[i] != '#') {
            result.push(S[i])
        }
    }

    return result.join('')
}
```
### 实现2
反向遍历，用一个标识位 skip 来标识是否要跳过遍历的字符，如果当前字符为 '#'，skip++，下一个遍历的字符就要跳过。
```js
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
 var backspaceCompare = function(S, T) {
    return getStr(S) == getStr(T)
};

function getStr(S) {
    let result = ''
    let i = S.length
    let skip = 0
    while (--i >= 0) {
        if (S[i] == '#') {
            skip++
        } else {
            if (!skip) result = S[i] + result
            skip = skip? skip - 1 : skip
        }
    }

    return result
}
```
