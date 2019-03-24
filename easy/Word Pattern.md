# 单词模式
给定一种 `pattern(模式)` 和一个字符串 `str` ，判断 `str` 是否遵循相同的模式。

这里的遵循指完全匹配，例如， `pattern` 里的每个字母和字符串 `str` 中的每个非空单词之间存在着双向连接的对应模式。

示例1:
```
输入: pattern = "abba", str = "dog cat cat dog"
输出: true
```
示例 2:
```
输入:pattern = "abba", str = "dog cat cat fish"
输出: false
```
示例 3:
```
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
```
示例 4:
```
输入: pattern = "abba", str = "dog dog dog dog"
输出: false
```
说明:

你可以假设 `pattern` 只包含小写字母， `str` 包含了由单个空格分隔的小写字母。    

## 实现
#### 实现1
```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const arry = str.split(' ')
    if (arry.length != pattern.length || new Set(arry).size != new Set(pattern).size) {
        return false    
    }
    
    const obj = {}
    let newStr = ''
    for (let i = 0, len = arry.length; i < len; i++) {
        let key = pattern[i]
        if (obj[key]) {
            newStr += `${obj[key]} `
        } else {
            obj[key] = arry[i]
            newStr += `${arry[i]} `
        }
    }
    
    return newStr.trim() == str
};
```
#### 实现2
```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const arry = str.split(' ')
    if (arry.length != pattern.length) {
        return false    
    }
    
    for (let i = 0, len = arry.length; i < len; i++) {
        if (pattern.indexOf(pattern[i]) != arry.indexOf(arry[i])) {
            return false
        }
    }
    
    return true
};
```
