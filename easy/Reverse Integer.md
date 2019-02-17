# 整数反转
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:
```
输入: 123
输出: 321
```
 示例 2:
```
输入: -123
输出: -321
```
示例 3:
```
输入: 120
输出: 21
```
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

## 实现
#### 实现1
```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = 2 ** 31 - 1
    const min = (-2) ** 31
    let isPlus = true
    if (x < 0) {
        isPlus = false
        x = -x
    }
    
    x = parseInt(Array.from(x + '').reverse().join(''))
    if (x > max || x < min) {
        return 0
    }
    
    return isPlus? x : -x
};
```

#### 实现2
```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = 2 ** 31 - 1
    const min = (-2) ** 31
    
    let result = 0
    while (x != 0) {
        let d = x % 10
        x = (x - d) / 10
        result = result * 10 + d
    }

    if (result > max || result < min) {
        return 0
    }
    
    return result
};
```
