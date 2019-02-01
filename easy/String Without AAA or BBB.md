# 不含 AAA 或 BBB 的字符串
给定两个整数 `A` 和 `B`，返回任意字符串 `S`，要求满足：

* S 的长度为 `A + B`，且正好包含 `A` 个 `'a'` 字母与 `B` 个 `'b'` 字母；
* 子串 `'aaa'` 没有出现在 `S` 中；
* 子串 `'bbb'` 没有出现在 `S` 中。
 

示例 1：
```
输入：A = 1, B = 2
输出："abb"
解释："abb", "bab" 和 "bba" 都是正确答案。
```
示例 2：
```
输入：A = 4, B = 1
输出："aabaa"
 ```

提示：

1. `0 <= A <= 100`
2. `0 <= B <= 100`
3. 对于给定的 `A` 和 `B`，保证存在满足要求的 `S`。

## 实现
#### 实现1
```
/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let str = ''
    let len
    let isWriteA = false
    while (A || B) {
        len = str.length
        
        if (len >= 2 && str[len - 1] == str[len - 2]) {
            if (str[len - 1] == 'b') {
                isWriteA = true
            }
        } else if (A >= B) {
            isWriteA = true
        }
        
        if (isWriteA) {
            A--
            str += 'a'
            isWriteA = false
        } else {
            B--
            str += 'b'
        }
    }
    
    return str
};
```
#### 实现2
```
/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let l1, l2, c1, c2
    
    if (A > B) {
        c1 = 'a'
        c2 = 'b'
        l1 = A
        l2 = B
    } else {
        c1 = 'b'
        c2 = 'a'
        l1 = B
        l2 = A
    }
    
    let str = ''
    while (l1 || l2) {
        let d2 = l1 == l2? 2 : 1
        d2 = Math.min(d2, l2)
        
        const d1 = Math.min(l1, 2)
        str += c1.repeat(d1)
        l1 -= d1
        
        str += c2.repeat(d2)
        l2 -= d2
    }
    
    return str
};
```
