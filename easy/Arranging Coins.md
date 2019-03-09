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
#### 实现2
思路：等差数列 转化成一元二次方程式求解
```js
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return ~~((-1 + Math.sqrt(1 + 8 * n)) / 2)
};
```
#### 实现3
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
    
    let left = 0, right = n
    
    while (left <= right) {
        let mid = ~~((left + right) / 2)
        const sum = mid * (mid + 1) / 2
        
        if (sum < n) {
            left = mid + 1
        } else if (sum > n) {
            right = mid - 1
        } else {
            return mid
        }
    }
    
    return left - 1
};
```
