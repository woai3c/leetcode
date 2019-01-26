# 最后一个单词的长度
给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指由字母组成，但不包含任何空格的字符串。

示例:
```
输入: "Hello World"
输出: 5
```

## JavaScript实现
思路都是一样 写法不同

#### 实现1
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = s.length
    let wordLen = 0
    while (len--) {
        if(s[len] === ' '){
            if (wordLen) {
                break
            }
        } else {
            wordLen++
        }
    }
    return wordLen
};
```

#### 实现2
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').pop().length
};
```

#### 实现3
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arry = s.trim().split(' ')
    let i = arry.length - 1
    if (i === 0) {
        let temp = arry[i]
        if (temp === '') {
            return 0
        }
        return temp.length
    }
    return arry[i].length
};
```
