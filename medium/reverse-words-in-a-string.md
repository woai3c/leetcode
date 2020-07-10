# [151. 翻转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)
给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：
```
输入: "the sky is blue"
输出: "blue is sky the"
```
示例 2：
```
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```
示例 3：
```
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```
说明：

* 无空格字符构成一个单词。
* 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
* 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

进阶：

* 请选用 C 语言的用户尝试使用 O(1) 额外空间复杂度的原地解法。

## 解法
倒序遍历字符串，遇见空格并且上一个字符不是空格，就将当前拼接的单词推入数组。
```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim()
    const words = []
    let word = ''
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != ' ') {
            word = s[i] + word
        } else if (s[i + 1] != ' ') {
            words.push(word)
            word = ''
        }
    }

    words.push(word)
    return words.join(' ')
};
```
