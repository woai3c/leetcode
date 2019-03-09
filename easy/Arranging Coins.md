# 排列硬币
你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

给定一个数字 n，找出可形成完整阶梯行的总行数。

n 是一个非负整数，并且在32位有符号整型的范围内。

示例 1:
```
n = 5

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤

因为第三行不完整，所以返回2.
```
示例 2:
```
n = 8

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

因为第四行不完整，所以返回3.
```
## 实现
#### 实现1
```js
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if (n == 0) {
        return 0    
    } else if (n < 3) {
        return 1
    }
    
    let nums = 1
    let row = 0
    
    while (n >= nums) {
        n -= nums
        nums++
        row++
    }
    
    return row
};
```
