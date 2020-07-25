# [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```
示例 2：
```
输入: "cbbd"
输出: "bb"
```
## 解法
### 解一
中心扩展法
```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s
    let result = ''
    let max = 0
    // 以每个字符的索引为中心点，向两边扩散，找到当前最大的回文字符
    // 最后通过比较得出最大的回文字符串
    for (let i = 0, lastIndex = s.length - 1; i < lastIndex; i++) {
        // 从当前字符向两边扩散，需要寻找两次
        // 是为了预防有这两种情况
        // 1. ccacc
        // 2. baab
        const str1 = getPalindrome(s, i, i)
        const str2 = getPalindrome(s, i, i + 1)
        let l1 = str1.length
        let l2 = str2.length
        if (l1 > l2 && l1 > max) {
            max = l1
            result = str1
        } else if (l2 > max){
            max = l2
            result = str2
        }
    }

    return result
};

function getPalindrome(s, start, end) {
    const len = s.length
    while (start >= 0 && end < len && s[start] == s[end]) {
        start--
        end++
    }

    return s.slice(start + 1, end)
}
```
