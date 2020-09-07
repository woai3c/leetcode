# [543. 二叉树的直径](https://leetcode-cn.com/problems/diameter-of-binary-tree/)
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

 

示例 :
给定二叉树
```
          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
```
 

注意：两结点之间的路径长度是以它们之间边的数目表示。
## 解法
这道题其实就是求左右子树的最大深度，然后再和当前节点相加。

就能得到最长路径一共有几个节点，节点数减去一就能得到有几条边。
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
var diameterOfBinaryTree = function(root) {
    if (!root) return 0
    let result = 0

    function dfs(node) {
        if (!node) return 0
        const left = dfs(node.left)
        const right = dfs(node.right)
        result = Math.max(result, left + right + 1)
        return Math.max(left, right) + 1
    }

    dfs(root)
    return result - 1
};
```
