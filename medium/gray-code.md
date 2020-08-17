# [89. 格雷编码](https://leetcode-cn.com/problems/gray-code/)
格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

格雷编码序列必须以 0 开头。

 

示例 1:
```
输入: 2
输出: [0,1,3,2]
解释:
00 - 0
01 - 1
11 - 3
10 - 2

对于给定的 n，其格雷编码序列并不唯一。
例如，[0,2,3,1] 也是一个有效的格雷编码序列。

00 - 0
10 - 2
11 - 3
01 - 1
```
示例 2:
```
输入: 0
输出: [0]
解释: 我们定义格雷编码序列必须以 0 开头。
     给定编码总位数为 n 的格雷编码序列，其长度为 2n。当 n = 0 时，长
```
## 解法
[详细通俗的思路分析，多解法](https://leetcode-cn.com/problems/gray-code/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by--12/)中的第二种解法
```js
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if (!n) return [0]
    const result = [0]
    let resLastIndex = 0
    for (let i = 1, len = 1 << n; i < len; i++) {
        if (i & 1) {
            result[resLastIndex + 1] = result[resLastIndex] ^ 1
        } else {
            const preVal = result[resLastIndex]
            let mask = 1
            for (let j = 0; j < n; j++) {
                if (mask & preVal) {
                    // 将右边第一个 1 的下一位置反
                    result[resLastIndex + 1] = preVal ^ (mask << 1)
                    break
                }

                mask <<= 1
            }
        }

        resLastIndex++
    }

    return result
};
```
