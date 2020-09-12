# [662. 二叉树最大宽度](https://leetcode-cn.com/problems/maximum-width-of-binary-tree/)
给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

示例 1:
```
输入: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

输出: 4
解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。
```
示例 2:
```
输入: 

          1
         /  
        3    
       / \       
      5   3     

输出: 2
解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。
示例 3:

输入: 

          1
         / \
        3   2 
       /        
      5      

输出: 2
解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。
```
示例 4:
```
输入: 

          1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7
输出: 8
解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。
```
注意: 答案在32位有符号整数的表示范围内。

## 解法
为每个节点设一个值 pos，根节点为 0。

它的左子节点为 pos * 2，右子节点为 pos * 2 + 1。

层序遍历时，用该层最后一个节点的 pos 减去第一个节点的 pos 即为该层宽度。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var widthOfBinaryTree = function(root) {
    if (!root) return 0
    const queue = [[root, 0n]]
    let max = 0n
    while (queue.length) {
        let len = queue.length
        let isFirst = true
        let left = 0n
        let right
        let node
        while (len--) {
            [node, right] = queue.shift()
            if (isFirst) {
                left = right
                isFirst = false
            }

            if (node.left) queue.push([node.left, right * 2n])
            if (node.right) queue.push([node.right, right * 2n + 1n])
        }

        max = right - left + 1n > max? right - left + 1n : max
    }
    
    return max
};
```
