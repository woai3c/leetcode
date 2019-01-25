# 平方数之和
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。

示例1:
```
输入: 5
输出: True
解释: 1 * 1 + 2 * 2 = 5
```

示例2:
```
输入: 3
输出: False
```
## JavaScript实现
```
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let b = c ** 0.5
    
    for (let a = 0; a <= b; a++) {
        let temp = (c - a * a) ** 0.5
        if (Number.isInteger(temp)) {
            return true
        }
    }
    
    return false
};
```
