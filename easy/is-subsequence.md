# [392. 判断子序列](https://leetcode-cn.com/problems/is-subsequence/)
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:
```
s = "abc", t = "ahbgdc"
```
返回 true.

示例 2:
```
s = "axc", t = "ahbgdc"
```
返回 false.

后续挑战 :

如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

## 解法
轮循 t 字符串，能在 t 中按顺序找到 s 的所有字符，就返回 true。

后续挑战：可以对 t 进行预处理，缓存 t 中每一个位置对应的下一个 `a~z` 的位置。即 t 中每一个索引都有一个包含 `a~z` 26 个字符的数组。

### 实现1
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s) return true
    if (!t) return false
    let sindex = 0
    let slen = s.length
    for (let i = 0, len = t.length; i < len; i++) {
        if (s[sindex] == t[i]) {
            if (++sindex == slen) return true
        }
    }

    return false
};
```

### 实现2——后续挑战
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s) return true
    if (!t) return false
    // 在 t 中加一个空格，主要是为了在缓存中从空格开始寻找 s[0] 的位置，因为每一个索引缓存的是下一个字符的位置。
    // 如果不加空格，那一开始在 cache[0] 中找的是 s[1] 的位置。
    t = ' ' + t
    const len = t.length
    const cache = new Array(len)
    for (let i = 0; i < len; i++) {
        cache[i] = new Array(26)
    }

    for (let c = 0; c < 26; c++) {
        let nextIndex = -1
        for (let i = len - 1; i >= 0; i--) {
            cache[i][c] = nextIndex
            if (toCode(t[i]) == c) {
                nextIndex = i
            }
        }
    }

    let nextIndex = 0
    for (let i = 0, l = s.length; i < l; i++) {
        nextIndex = cache[nextIndex][toCode(s[i])]
        if (nextIndex == -1) return false
    }

    return true
};

function toCode(c) {
    return c.charCodeAt() - 97
}
```
