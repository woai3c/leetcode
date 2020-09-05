# [125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:
```
输入: "A man, a plan, a canal: Panama"
输出: true
```
示例 2:
```
输入: "race a car"
输出: false
```
## 解法
### 解一
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const re = /[0-9a-zA-Z]/
    let str = ''
    for (let i = 0, len = s.length; i < len; i++) {
        if (re.test(s[i])) {
            str += s[i].toLowerCase()
        }
    }

    const len = str.length
    for (let i = 0, end = Math.floor(str.length / 2); i < end; i++) {
        if (str[i] != str[len - 1 - i]) return false
    }

    return true
};
```
### 解二
双指针
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const re = /[0-9a-zA-Z]/
    let left = 0
    let right = s.length - 1
    while (left < right) {
        while (!re.test(s[left])) {
            left++
        }

        while (!re.test(s[right])) {
            right--
        }

        if (left >= right) return true
        if (s[left].toLowerCase() != s[right].toLowerCase()) return false
        left++
        right--
    }

    return true
};
```
