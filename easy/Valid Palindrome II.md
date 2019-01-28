# 验证回文字符串 Ⅱ
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:
```
输入: "aba"
输出: True
```
示例 2:
```
输入: "abca"
输出: True
解释: 你可以删除c字符。
```
注意:

1. 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

## 实现
```
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let len = s.length
    let maxIndex = len
    
    for (let i = 0, l = Math.floor(len / 2); i < l; i++) {
        maxIndex--
        if (s[i] != s[maxIndex]) {
            return validSubString(s, i + 1, maxIndex, l) || validSubString(s, i, maxIndex - 1, l)
        }
    }
    
    return true
};

function validSubString(s, start, end, len) {
    for (; start <= len; start++) {
        if (s[start] != s[end]) {
            return false
        }
        end--
    }
    
    return true
}
```
