# [87. 扰乱字符串](https://leetcode-cn.com/problems/scramble-string/)
给定一个字符串 s1，我们可以把它递归地分割成两个非空子字符串，从而将其表示为二叉树。

下图是字符串 s1 = "great" 的一种可能的表示形式。
```
    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
```
在扰乱这个字符串的过程中，我们可以挑选任何一个非叶节点，然后交换它的两个子节点。

例如，如果我们挑选非叶节点 "gr" ，交换它的两个子节点，将会产生扰乱字符串 "rgeat" 。
```
    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
```
我们将 "rgeat” 称作 "great" 的一个扰乱字符串。

同样地，如果我们继续交换节点 "eat" 和 "at" 的子节点，将会产生另一个新的扰乱字符串 "rgtae" 。
```
    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
```
我们将 "rgtae” 称作 "great" 的一个扰乱字符串。

给出两个长度相等的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。

示例 1:
```
输入: s1 = "great", s2 = "rgeat"
输出: true
```
示例 2:
```
输入: s1 = "abcde", s2 = "caebd"
输出: false
```
## 解法
[详细通俗的思路分析，多解法](https://leetcode-cn.com/problems/scramble-string/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-1-2/)
```js
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isScramble = function(s1, s2) {
    if (s1 == s2) return true
    if (s1.length != s2.length) return false
    // 如果两个字符串中的字符数不一样，直接返回 false
    const t1 = s1.split('').sort().join('')
    const t2 = s2.split('').sort().join('')
    if (t1 != t2) return false
    
    for (let i = 1, len = s1.length; i < len; i++) {
        const flag1 = isScramble(s1.slice(0, i), s2.slice(0, i)) && isScramble(s1.slice(i), s2.slice(i))
        const flag2 = isScramble(s1.slice(0, i), s2.slice(len - i)) && isScramble(s1.slice(i), s2.slice(0, len - i))
        // 找到了就返回 没找到继续找
        if (flag1 || flag2) return true
    }

    return false
};
```
