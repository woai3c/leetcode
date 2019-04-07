# 强整数
给定两个正整数 x 和 y，如果某一整数等于 x^i + y^j，其中整数 i >= 0 且 j >= 0，那么我们认为该整数是一个强整数。

返回值小于或等于 bound 的所有强整数组成的列表。

你可以按任何顺序返回答案。在你的回答中，每个值最多出现一次。

 

示例 1：
```
输入：x = 2, y = 3, bound = 10
输出：[2,3,4,5,7,9,10]
解释： 
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2
```
示例 2：
```
输入：x = 3, y = 5, bound = 15
输出：[2,4,6,8,10,14]
``` 

提示：

1. `1 <= x <= 100`
2. `1 <= y <= 100`
3. `0 <= bound <= 10^6`

## 实现
#### 实现1
```js
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    const set = new Set()
    for (let i = 0; i < bound; i++) {
        const temp = x ** i
        if (temp + 1 <= bound) {
            set.add(temp + 1)
        } else {
            break
        }
        
        for (let j = 1; j < bound; j++) {
            const num = temp + y ** j
            if (num <= bound) {
                set.add(num)
            } else {
                break
            }
        }
    }
    
    return Array.from(set)
};
```
#### 实现2
```js
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    const set = new Set()
    for (let a = 1; a < bound; a *= x) {
        for (let b = 1; a + b <= bound; b *= y) {
            set.add(a + b)
            if (y == 1) {
                break
            }
        }
        
        if (x == 1) {
            break
        }
    }
    
    return Array.from(set)
};
```
