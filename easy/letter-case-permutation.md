# [784. 字母大小写全排列](https://leetcode-cn.com/problems/letter-case-permutation/)
给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。

示例:
```
输入: S = "a1b2"
输出: ["a1b2", "a1B2", "A1b2", "A1B2"]

输入: S = "3z4"
输出: ["3z4", "3Z4"]

输入: S = "12345"
输出: ["12345"]
```
注意：

* S 的长度不超过12。
* S 仅由数字和字母组成。

## 解法
递归
```js
/**
 * @param {string} S
 * @return {string[]}
 */
 var letterCasePermutation = function(S) {
    const result = []
    _letterCasePermutation(S, 0, [], result)
    return result
};

function _letterCasePermutation(S, start, path, result) {
    if (start == S.length) return result.push(path.join(''))
    const c = S[start++]
    if (/\d/.test(c)) {
        path.push(c)
        _letterCasePermutation(S, start, path, result)
        path.pop()
    } else {
        path.push(c.toLowerCase())
        _letterCasePermutation(S, start, path, result)
        path.pop()

        path.push(c.toUpperCase())
        _letterCasePermutation(S, start, path, result)
        path.pop()
    }
}
```
