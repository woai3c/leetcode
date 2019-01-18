# 亲密字符串
给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

 

示例 1：
```
输入： A = "ab", B = "ba"
输出： true
```
示例 2：
```
输入： A = "ab", B = "ab"
输出： false
```
示例 3:
```
输入： A = "aa", B = "aa"
输出： true
```
示例 4：
```
输入： A = "aaaaaaabc", B = "aaaaaaacb"
输出： true
```
示例 5：
```
输入： A = "", B = "aa"
输出： false
```
提示：
```
0 <= A.length <= 20000
0 <= B.length <= 20000
A 和 B 仅由小写字母构成。
```

## JavaScript实现
```
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let len = A.length
    if (len != B.length) {
        return false
    }
    
    let tempA, tempB, tempC, tempD
    
    if (A == B) {
        for (let j = 0; j < len; j++) {
            if (A.split(A[j]).length > 2) {
                return true
            }
        }
    } else {
        let count = 0
        for (let i = 0; i < len; i++) {
            if (A[i] != B[i]) {
                if (++count > 2) {
                    return false
                }
                if (tempA === undefined) {
                    tempA = A[i]
                    tempB = B[i]
                } else {
                    tempC = A[i]
                    tempD = B[i]
                }
            }
        }
        if (tempA == tempD && tempB == tempC) {
            return true
        }
    }
    
    return false
};
```
## C实现
```
bool buddyStrings(char* A, char* B) {
    int len = strlen(A);
    
    if (len != strlen(B)) {
        return false;
    }
    
        
    if (strcmp(A, B) == 0) {
        for (int j = 0; j < len; j++) {
            char c = A[j];
            for (int k = j + 1; k < len; k++) {
                if (A[k] == c) {
                    return true;
                }
            }
        }
    } else {
        int count = 0;
        char tempA, tempB, tempC, tempD;
        
        for (int i = 0; i < len; i++) {
            if (A[i] != B[i]) {
                if (++count > 2) {
                    return false;
                }
                if (!tempA) {
                    tempA = A[i];
                    tempB = B[i];
                } else {
                    tempC = A[i];
                    tempD = B[i];
                }
            }
        }
        if (tempA == tempD && tempB == tempC) {
            return true;
        }
    }
    
    return false;
}
```
