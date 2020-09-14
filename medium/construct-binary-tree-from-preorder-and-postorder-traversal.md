# [889. 根据前序和后序遍历构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)
返回与给定的前序和后序遍历匹配的任何二叉树。

 pre 和 post 遍历中的值是不同的正整数。

 

示例：
```
输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
输出：[1,2,3,4,5,6,7]
```

提示：

* 1 <= pre.length == post.length <= 30
* pre[] 和 post[] 都是 1, 2, ..., pre.length 的排列
* 每个输入保证至少有一个答案。如果有多个答案，可以返回其中一个。
## 解法
[图解 889. 根据前序和后序遍历构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/solution/tu-jie-889-gen-ju-qian-xu-he-hou-xu-bian-li-gou-2/)
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if (!pre.length) return null
    const root = new TreeNode(pre[0])
    const leftCount = post.indexOf(pre[1]) + 1
    root.left = constructFromPrePost(pre.slice(1, leftCount + 1), post.slice(0, leftCount))
    root.right = constructFromPrePost(pre.slice(leftCount + 1), post.slice(leftCount, post.length - 1))
    return root
};
```
