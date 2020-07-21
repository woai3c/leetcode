# [96. 不同的二叉搜索树](https://leetcode-cn.com/problems/unique-binary-search-trees/)
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:
```
输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

## 解法
[官方题解](https://leetcode-cn.com/problems/unique-binary-search-trees/solution/bu-tong-de-er-cha-sou-suo-shu-by-leetcode-solution/)

dp 动态规划

```js
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const G = new Array(n + 1).fill(0)
    G[0] = 1
    G[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            G[i] += G[j - 1] * G[i - j]
        }
    }

    return G[n]
};
```
