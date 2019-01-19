# 计数质数

统计所有小于非负整数 n 的质数的数量。

示例:
```
输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
```

## JavaScript实现
#### 实现1
```
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 3) {
        return 0
    }
    
    let count = 0
    let isCompositeNumber
    for (let i = 2; i < n; i++) {
        isCompositeNumber = false
        for (let k = 2, squareRoot = Math.sqrt(i); k <= squareRoot; k++) {
            if (i % k == 0) {
                isCompositeNumber = true
                break
            }
        }
        
        if (!isCompositeNumber) {
            count++
        }
    }
    
    return count
};
```

#### 实现2
思路请参考：https://blog.csdn.net/huang_miao_xin/article/details/51331710
```
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n < 3) {
        return 0
    }
    
    switch (n) {
        case 3:
            return 1
        case 4:
        case 5:
            return 2
    }
    // 质数分布的规律：大于等于5的质数一定和6的倍数相邻。例如5和7，11和13,17和19等等
    if (n > 5) {
        let count = 3
        let isCompositeNumber
        for (let i = 6; i < n; i++) {
            isCompositeNumber = false
    
            // 不在6的倍数两侧的一定不是质数
            if (i % 6 != 1 && i % 6 != 5) {
                isCompositeNumber = true
            } else {
                // 在6的倍数两侧的也可能不是质数 再判断一次
                for (let k = 5, squareRoot = Math.sqrt(i); k <= squareRoot; k += 6) {
                    if(i % k == 0 || i % (k + 2) == 0) {
                        isCompositeNumber = true
                        break
                    }
                }
            }
            
            if (!isCompositeNumber) {
                count++
            }
        }
        
        return count
    }
};
```
#### 实现3
```
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0
    if (n <= 3) return 1
    
    let count = 1
    // 用来存放合数的数组
    const arry = new Array(n)
    // 素数的倍数不是素数
    for (let i = 3; i < n; i += 2) {
        if (arry[i]) continue
        count++
        // 将素数的倍数放到合数数组里
        for(let j = i + i; j < n; j = j + i) {
            arry[j] = true
        }
    }
    
    return count
};
```
