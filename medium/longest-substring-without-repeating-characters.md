# [3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
示例 2:
```
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```
示例 3:
```
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```
## 解法
用一个 maxLen 变量保存字符串历史最大长度，用 cur 来表示当前遍历过的没有重复的字符串。

那么在遍历给定的字符串 s 时会遇到两种情况：
1. 当前字符 s[i] 不在 cur 中，执行 cur+= s[i]
2. 当前字符 s[i] 在 cur 中，这时会将当前的 cur 长度和 maxLen 比较，将最大值保存在 maxLen。然后再从 cur 中有冲突的字符的下一个字符开始遍历。

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    let cur = ''
    for (let i = 0, len = s.length; i < len; i++) {
        const index = cur.indexOf(s[i])
        if (index > -1) {
            maxLen = maxLen > cur.length? maxLen : cur.length
            cur = cur.slice(index + 1)
        }

        cur += s[i]
    }

    return maxLen > cur.length? maxLen : cur.length
};
```
