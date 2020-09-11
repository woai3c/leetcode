# [508. 出现次数最多的子树元素和](https://leetcode-cn.com/problems/most-frequent-subtree-sum/)
给你一个二叉树的根结点，请你找出出现次数最多的子树元素和。一个结点的「子树元素和」定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

你需要返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

 

示例 1：
```
输入:

  5
 /  \
2   -3
```
返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。

示例 2：
```
输入：

  5
 /  \
2   -5
```
返回 [2]，只有 2 出现两次，-5 只出现 1 次。

 

提示： 假设任意子树元素和均可以用 32 位有符号整数表示。
## 解法
后序遍历 + 哈希
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const hash = {}

    function dfs(node) {
        if (!node) return 0
        const sum = node.val + dfs(node.left) + dfs(node.right)
        if (!hash[sum]) {
            hash[sum] = 0
        }

        hash[sum]++
        return sum
    }

    dfs(root)

    let result = []
    let max = 0
    Object.keys(hash).forEach(key => {
        if (hash[key] > max) {
            result = [key]
            max = hash[key]
        } else if (hash[key] == max) {
            result.push(key)
        }
    })

    return result
};
```
