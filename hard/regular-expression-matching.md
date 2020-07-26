# [10. 正则表达式匹配](https://leetcode-cn.com/problems/regular-expression-matching/)
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
```
'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
```
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

说明:

* s 可能为空，且只包含从 a-z 的小写字母。
* p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

示例 1:
```
输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
```
示例 2:
```
输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
```
示例 3:
```
输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
```
示例 4:
```
输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
```
示例 5:
```
输入:
s = "mississippi"
p = "mis*is*p*."
输出: false
```
## 解法
[5行代码 简明清晰写法（Python3详细注释）](https://leetcode-cn.com/problems/regular-expression-matching/solution/jian-ming-qing-xi-xie-fa-python3xiang-xi-zhu-shi-b/)
```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    const sLen = s.length
    const pLen = p.length

    function recursion(i, j) {
        // p 匹配完了 就可以看结果了
        if (j == pLen) return i == sLen
        // s 匹配完了，还需要看 p 是否匹配完
        // 防止有 s = aa, p = aad* 的情况
        let match = i < sLen && (s[i] == p[j] || p[j] == '.')
        // p 的下一个字符如果为 *，则有两种情况
        // 1. s = aaaa  p = aa*a，这种情况 p 不动 s 进一位
        // 2. s = aa, p = aad*，这种情况 s 不动 p 进两位
        if (j + 2 <= pLen && p[j + 1] == '*') {
            return (match && recursion(i + 1, j)) || recursion(i, j + 2)
        }

        // 如果 p 下一个字符不为 *，并且 p 和 s 当前的字符都匹配，两者都进一位
        return match && recursion(i + 1, j + 1)
    }

    return recursion(0, 0)
};
```
