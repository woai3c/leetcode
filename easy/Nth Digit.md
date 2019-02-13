# 第N个数字
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:
```
输入:
3

输出:
3
```
示例 2:
```
输入:
11

输出:
0

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
```

## 实现
#### 实现1
```
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if (n <= 9) {
        return n
    }
    
    return recursionFindDigit(n - 9, 9, 2)
};

function recursionFindDigit(n, preVal, valLen) {
    const cur = preVal * 10
    const curLen = cur * valLen
    
    if (n > curLen) {
        return recursionFindDigit(n - curLen, cur, valLen + 1)
    }
    
    n--
    let start = 10 ** (valLen - 1) + parseInt(n / valLen) + ''

    return start[n % valLen]
}
```

#### 实现2
```
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if (n <= 9) {
        return n
    }
    // 9 * 10
    let cur = 90
    let valLen = 2
    // cur * valLen
    let curLen = 180
    n -= 9
    
    while (n > curLen) {
        n -= curLen
        cur *= 10
        valLen++
        curLen = cur * valLen 
    }
    
    n--
    let start = 10 ** (valLen - 1) + parseInt(n / valLen) + ''

    return start[n % valLen]
};
```
