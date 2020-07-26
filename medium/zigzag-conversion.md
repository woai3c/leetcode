# [6. Z 字形变换](https://leetcode-cn.com/problems/zigzag-conversion/)
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
```
L   C   I   R
E T O E S I I G
E   D   H   N
```
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：
```
string convert(string s, int numRows);
```
示例 1:
```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```
示例 2:
```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:
L     D     R
E   O E   I I
E C   I H   N
T     S     G
```

## 解法
可以为每行分配一个数组，访问时按 N 字形访问字符串。
1. 一开始往下走，row 为 0，得到 L
2. row 为 1，得到 E
3. row 为 2，得到 E
4. row 到头了，需要往上走，row--，此时 row 为 1，得到 T
5. ...
```
L   C   I   R      ---arr[0]
E T O E S I I G    ---arr[1]
E   D   H   N      ---arr[2]
```
遍历完后，将每个数组的字符拼在一起就是答案。
```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) return s
    const arr = []
    for (let i = 0; i < numRows; i++) {
        arr.push([])
    }

    let isDown = false
    let row = 0
    for (let i = 0, len = s.length; i < len; i++) {
        arr[row].push(s[i])
        if (row == numRows - 1 || row == 0) isDown = !isDown
        row += isDown? 1 : -1
    }

    let result = ''
    for (let i = 0; i < numRows; i++) {
        result += arr[i].join('')
    }

    return result
};
```
