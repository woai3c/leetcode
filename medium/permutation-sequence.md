# [60. 第k个排列](https://leetcode-cn.com/problems/permutation-sequence/)
给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

* "123"
* "132"
* "213"
* "231"
* "312"
* "321"

给定 n 和 k，返回第 k 个排列。

说明：

* 给定 n 的范围是 [1, 9]。
* 给定 k 的范围是[1,  n!]。

示例 1:
```
输入: n = 3, k = 3
输出: "213"
```
示例 2:
```
输入: n = 4, k = 9
输出: "2314"
```
## 解法
### 解一
暴力法，按顺序找到第 K 个排列。
```js
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
    let isDone = false
    let result = ''
    let start = 1
    function backtrace(path) {
        if (path.length == n) {
            if (start == k) {
                result = path
                isDone = true
            } else {
                start++
            }
            
            return
        }

        for (let i = 1; i <= n; i++) {
            if (path.includes(i)) continue
            backtrace(path + i)
            if (isDone) return
        }
    }

    backtrace('')
    return result
};
```
### 解二
暴力法的缺点是每一个层级都需要遍历完所有节点。

其实在遍历到每一层时，就可以获知当前层级有多少种可能，如果这个可能数量少于 K，那就可以直接进入下一层级，而不用继续遍历当前层级了。

例如：
```
输入: n = 4, k = 9
输出: "2314"
```
用一个 start 来记录已经遍历了多少个排列，默认为 1。

一开始，取 1，剩下的 3 个数只有 6 种可能。小于 K 的 9，所以直接进入下一层，`start += 6` 然后从 2 开始遍历。

取 2，剩下的 3 个数有 6 种可能，`start += 6`，大于 9，答案就是在这一层，然后执行 backtrace('2') 递归处理。

如此循环，直到 `path.length == n` 并且 `start == k`，就找到答案了。
```js
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
    const factorial = [1]
    // 用于判断某个数字是否使用
    const used = new Array(n + 1).fill(false)
    // 存储每个数字对应的阶乘数量，例如 3，有 6 种可能 factorial[3] = 6
    for (let i = 1; i < n; i++) {
        factorial[i] = i * factorial[i - 1]
    }

    let isDone = false
    let result = ''
    let start = 1
    
    function backtrace(path) {
        if (path.length == n) {
            if (start == k) {
                result = path
                isDone = true
            } else {
                start++
            }
            
            return
        }

        for (let i = 1; i <= n; i++) {
            if (used[i]) continue
            const cur = factorial[n - (path + i).length]
            if (start + cur <= k) {
                start += cur
                continue
            }

            used[i] = true
            backtrace(path + i)
            used[i] = false
            if (isDone) return
        }
    }

    backtrace('')
    return result
};
```
