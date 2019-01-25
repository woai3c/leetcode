# 给定数字能组成的最大时间
给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。

最小的 24 小时制时间是 00:00，而最大的是 23:59。从 00:00 （午夜）开始算起，过得越久，时间越大。

以长度为 5 的字符串返回答案。如果不能确定有效时间，则返回空字符串。

 

示例 1：
```
输入：[1,2,3,4]
输出："23:41"
```
示例 2：
```
输入：[5,5,5,5]
输出：""
```

提示：

1. `A.length == 4`
2. `0 <= A[i] <= 9`

## JavaScript实现
```
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    let len = A.length
    if (len == 4) {
        const time = []
        A.sort((a, b) => b - a)
        let i = 0
        
        while (i < len) {
            let temp = A[i]
            if (temp <= 2) {
                if (temp == 2) {
                    let j = 0
                    let count = 0
                    while (j < i) {
                        if (A[j] > 5) {
                            count++
                        }
                        j++
                    }

                    if (count > 1) {
                        i++
                        continue
                    }
                }
                time.push(A.splice(i, 1)[0])
                len--
                i = 0
                break
            }
            i++
        }
        
        while (i < len) {
            if (time[0] == 2) {
                if (A[i] <= 3) {
                    time.push(A.splice(i, 1)[0])
                    len--
                    i = 0
                    break
                }
            } else {
                time.push(A.splice(i, 1)[0])
                len--
                i = 0
                break
            }
            i++
        }
        
        while (i < len) {
            if (A[i] <= 5) {
                time.push(A.splice(i, 1)[0])
                break
            }
            i++
        }
        
        time.push(A[0])
        
        if (time.length < 4) {
            return ''
        }
        
        time.splice(2, 0, ':')
        return time.join('')
    } else {
        return ''
    }
};
```
