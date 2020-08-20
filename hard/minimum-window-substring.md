# [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/)
给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。

示例：
```
输入：S = "ADOBECODEBANC", T = "ABC"
输出："BANC"
```

提示：

* 如果 S 中不存这样的子串，则返回空字符串 ""。
* 如果 S 中存在这样的子串，我们保证它是唯一的答案。
## 解法
滑动窗口
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    if (s == t) return t

    const hash = {}
    for (let i = 0, len = t.length; i < len; i++) {
        if (!hash[t[i]]) {
            hash[t[i]] = 1
        } else {
            hash[t[i]]++
        }
    }

    const len1 = s.length
    const len2 = t.length
    let left = 0
    let right = 0
    let count = 0 // 记录当前匹配的字符串数量
    let resL = -1 // 当前最小字符串左索引
    let resR = len1 // 当前最小字符串右索引
    while (right < len1) {
        const c = s[right]
        // 由于每一次循环都会执行 hash[c]--
        // 所以只有大于 0 时，才执行 count++
        // 防止有 s = 'aaaab' t = 'ab' 的情况
        if (hash[c] > 0) {
            count++
        }
        
        hash[c]--
        while (count == len2) {
            if (right - left < resR - resL) {
                resL = left
                resR = right
            }
            
            // 看下面的注释，等把数字变成 0 了，才需要进行 count--
            if (hash[s[left]] == 0) {
                count--
            }

            // 由于有 s = 'aaaab' t = 'ab' 的情况
            // 上面减到负数了，这里要加回来
            hash[s[left]]++
            left++
        }

        right++
    }

    return resL == -1? '' : s.slice(resL, resR + 1)
};
```
