# [415. 字符串相加](https://leetcode-cn.com/problems/add-strings/)
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。


提示：

* num1 和num2 的长度都小于 5100
* num1 和num2 都只包含数字 0-9
* num1 和num2 都不包含任何前导零
* 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
## 解法
竖形相加
```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    let i1 = num1.length - 1
    let i2 = num2.length - 1
    let carry = 0
    let result = ''
    while (i1 >= 0 || i2 >= 0 || carry) {
        const a = num1[i1]? num1[i1] - '0' : 0
        const b = num2[i2]? num2[i2] - '0' : 0
        const sum = a + b + carry
        result = sum % 10 + result
        carry = ~~(sum / 10)
        i1--
        i2--
    }

    return result
};
```
