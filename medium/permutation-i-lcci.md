# [面试题 08.07. 无重复字符串的排列组合](https://leetcode-cn.com/problems/permutation-i-lcci/)
无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

示例1:
```
 输入：S = "qwe"
 输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
```
示例2:
```
 输入：S = "ab"
 输出：["ab", "ba"]
```
提示:

* 字符都是英文字母。
* 字符串长度在[1, 9]之间。
## 解法
### 实现1
回溯
```js
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    if (!S) return []
    const result = []
    dfs(S, [], result)
    return result
};

function dfs(S, path, result) {
    if (path.length == S.length) return result.push(path.join(''))
    for (let i = 0, len = S.length; i < len; i++) {
        if (path.includes(S[i])) continue
        path.push(S[i])
        dfs(S, path, result)
        path.pop()
    }
}
```
