# [337. 打家劫舍 III](https://leetcode-cn.com/problems/house-robber-iii/)
在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。

这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。

一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

示例 1:
```
输入: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

输出: 7 
解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
```
示例 2:
```
输入: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

输出: 9
解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.
```
## 解法
[官方题解](https://leetcode-cn.com/problems/house-robber-iii/solution/da-jia-jie-she-iii-by-leetcode-solution/)
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
 * @return {number}
 */
var rob = function(root) {
    const f = new Map()
    const g = new Map()

    function helper(node) {
        if (!node) return
        helper(node.left)
        helper(node.right)
        f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0))
        g.set(
            node,
            Math.max(f.get(node.left) || 0, g.get(node.left) || 0) 
            + Math.max(f.get(node.right) || 0, g.get(node.right) || 0)
        )
    }

    helper(root)
    return Math.max(f.get(root) || 0, g.get(root) || 0)
};
```
