# [67. 二进制求和](https://leetcode-cn.com/problems/add-binary/)
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

示例 1:
```
输入: a = "11", b = "1"
输出: "100"
```
示例 2:
```
输入: a = "1010", b = "1011"
输出: "10101"
```

提示：

* 每个字符串仅由字符 '0' 或 '1' 组成。
* 1 <= a.length, b.length <= 10^4
* 字符串如果不是 "0" ，就都不含前导零。

### 实现
```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let hasCarry = false
    let result = ''
    if (a.length > b.length) {
        b = '0'.repeat(a.length - b.length) + b
    } else if (a.length < b.length) {
        a = '0'.repeat(b.length - a.length) + a
    }

    let len = a.length
    for (let i = len - 1; i >= 0; i--) {
        const abit = a[i]
        const bbit = b[i]
        if (abit == '1' && bbit == '1') {
            if (hasCarry) {
                result = '1' + result
            } else {
                result = '0' + result
            }

            hasCarry = true
        } else if ((abit == '1' && bbit == '0') || (abit == '0' && bbit == '1')) {
            if (hasCarry) {
                result = '0' + result
            } else {
                result = '1' + result
                hasCarry = false
            }
        } else {
            if (hasCarry) {
                result = '1' + result
            } else {
                result = '0' + result
            }

            hasCarry = false
        }
    }

    if (hasCarry) result = '1' + result
    return result
};
```
