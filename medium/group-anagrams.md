# [49. 字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:
```
输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```
说明：

* 所有输入均为小写字母。
* 不考虑答案输出的顺序。
## 解法
### 解一
哈希+字符串排序
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {}
    for (const s of strs) {
        const key = s.split('').sort().join('')
        if (!hash[key]) {
            hash[key] = []
        }

        hash[key].push(s)
    }

    return Object.values(hash)
};
```
### 解二
哈希+计数
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {}
    for (const s of strs) {
        const count = new Array(26).fill(0)
        // 不能单纯的将每个字符转成数字相加，作为 key
        // 例如 abc 和 aad 转成数字的值是相同的
        for (const c of s) {
            count[c.charCodeAt() - 97]++
        }

        let key = ''
        // key 的生成方法改为
        // 每个字母对应一个 '#'，后面是每个字母的数量，默认为 0
        for (let i = 0; i < 26; i++) {
            key += '#' + count[i]
        }

        if (!hash[key]) {
            hash[key] = []
        }

        hash[key].push(s)
    }

    return Object.values(hash)
};
```
