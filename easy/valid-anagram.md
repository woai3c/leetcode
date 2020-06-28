# [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:
```
输入: s = "anagram", t = "nagaram"
输出: true
```
示例 2:
```
输入: s = "rat", t = "car"
输出: false
```
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

## 解法
### 实现1
重新排序，再比较 s == t
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    return s == t
};
```
### 实现2
哈希表
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const hash = {}
    for (let i = 0, len = s.length; i < len; i++) {
        const key = s[i]
        if (hash[key]) {
            hash[key]++
        } else {
            hash[key] = 1
        }
    }

    for (let i = 0, len = t.length; i < len; i++) {
        const key = t[i]
        if (hash[key]) {
            hash[key]--
            if (hash[key] == 0) delete hash[key]
        } else {
            return false
        }
    }

    return Object.keys(hash).length == 0
};
```
