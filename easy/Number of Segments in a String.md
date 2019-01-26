# 字符串中的单词数
统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:
```
输入: "Hello, my name is John"
输出: 5
```

## JavaScript实现
```
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    s = s.trim().replace(/\s+/g, ' ')
    if (s === '') {
        return 0
    }
    return s.split(' ').length
};
```
