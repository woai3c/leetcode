# x 的平方根
实现 `int sqrt(int x)` 函数。

计算并返回 `x` 的平方根，其中 `x` 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:
```
输入: 4
输出: 2
```
示例 2:
```
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
```

## 实现
#### 实现1
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 0) {
        return 0
    }

    let y = 0
    let j = 15
    const bitArray = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768]
    
    while (j >= 0) {
        let temp = y + bitArray[j]
        let tempTwo = temp * temp
        
        if (tempTwo == x) {
            return temp
        }
        
        if (tempTwo < x) {
            y = temp
        }
        j--
    }
    
    return y
};
```

#### 实现2
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x
    let mid
    while(left <= right) {
        mid = parseInt((left + right) / 2)
        let square = mid * mid
        if (square > x) {
            right = mid - 1
        } else if (square < x) {
            left = mid + 1
        } else {
            return mid
        }
    }
    
    return left < right? left : right
};
```

#### 实现3
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x == 0) {
        return 0
    }
    
    let last = 0
    let res = 1
    while (res != last) {
        last = res
        res = (res + x / res) / 2
    }
    return parseInt(res)
};
```
