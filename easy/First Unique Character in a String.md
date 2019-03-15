# 字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:
```
s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
``` 

**注意事项**：您可以假定该字符串只包含小写字母。

## 实现
#### 实现1
```js
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const arry = new Array(26).fill(0)
    const len = s.length
    for (let i = 0; i < len; i++) {
        const index = s[i].charCodeAt() - 97
        arry[index]++
    }
    
    for (let i = 0; i < len; i++) {
        const index = s[i].charCodeAt() - 97
        if (arry[index] == 1) {
            return i
        }
    }

    return -1
};
```

#### 实现2
```js
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const str = 'abcdefghijklmnopqrstuvwxyz'
    let first = s.length
    
    for (let i = 0, len = str.length; i < len; i++) {
        const c = str[i]
        let index = s.indexOf(c)
        if (index != -1 && index == s.lastIndexOf(c)) {
            if (index < first) {
                first = index
            }
        }
    }
    
    return first == s.length? -1 : first
};
```
#### 实现3
```js
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0, len = s.length; i < len; i++) {
        const c = s[i]
        if (s.indexOf(c) == s.lastIndexOf(c)) {
            return i
        }
    }
    
    return -1
};
```
