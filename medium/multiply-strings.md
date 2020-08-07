# [43. 字符串相乘](https://leetcode-cn.com/problems/multiply-strings/)
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:
```
输入: num1 = "2", num2 = "3"
输出: "6"
```
示例 2:
```
输入: num1 = "123", num2 = "456"
输出: "56088"
```
说明：

* num1 和 num2 的长度小于110。
* num1 和 num2 只包含数字 0-9。
* num1 和 num2 均不以零开头，除非是数字 0 本身。
* 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。

## 解法
假设有 89 * 56，可以将它们每个数单独相乘，用 extra1 和 extra2 来表明它们的位数，默认为个位， 即 1。
1. 6 * 9，两个都是个位，得到 54，这时用字符串加法把它们和 result 加在一起，result 默认为 ''。
2. 6 * 80，8 为十位，所以需要乘以 10，结果为 480，再将 480 和刚才的 result（上一个加法结果为'48'） 加在一起。
3. 然后再依次执行 50 * 9，50 * 80，最后得到结果。

不过由于测试条件有非常大的数相乘，用 extra1 和 extra2 来模拟进位也不行，会有溢出情况。
所以可以用 + '0' 来代替，例如 6 * 80，变成 6 * 8 + '0'，这样就不会溢出了。

### 解一——竖式乘法
```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == 0 || num2 == 0) return '0'
    let extra1 = ''
    let result = ''
    for (let i = num1.length - 1; i >= 0; i--) {
        let extra2 = ''
        for (let j = num2.length - 1; j >= 0; j--) {
            // ~~ 的作用是取整，如果是无法识别的值，则取 0
            result = add(~~num1[i] * ~~num2[j] + extra1 + extra2, result)
            extra2 += '0'
        }

        extra1 += '0'
    }

    return result
};

function add(num1, num2) {
    let result = ''
    let carry = 0
    let i = num1.length - 1
    let j = num2.length - 1
    while (i >= 0 || j >= 0 || carry) {
        const a = ~~num1[i]
        const b = ~~num2[j]
        const sum = a + b + carry
        result = sum % 10 + result
        carry = ~~(sum / 10)

        i--
        j--
    }

    return result
}
```
### 解二
[优化版竖式(打败99.4%)](https://leetcode-cn.com/problems/multiply-strings/solution/you-hua-ban-shu-shi-da-bai-994-by-breezean/)
```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == 0 || num2 == 0) return '0'
    const result = new Array(num1.length + num2.length).fill(0)
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const sum = ~~num1[i] * ~~num2[j] + result[i + j + 1]
            result[i + j + 1] = sum % 10
            result[i + j] += ~~(sum / 10)
        }
    }

    return result.join('').replace(/^0*/, '')
};
```
