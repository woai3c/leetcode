# [17. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png)

示例:
```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```
说明:

尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

## 解法
回溯
```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return []
    const hash = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const result = []
    const len = digits.length

    function dfs(index, path) {
        if (index == len) return result.push(path)
        const str = hash[digits[index]]
        for (let i = 0; i < str.length; i++) {
            dfs(index + 1, path + str[i])
        }
    }

    dfs(0, '')
    return result
};
```
