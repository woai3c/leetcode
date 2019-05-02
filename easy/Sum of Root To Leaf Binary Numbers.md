# 从根到叶的二进制数之和
给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。

例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。

对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

以 10^9 + 7 为模，返回这些数字之和。

 

示例：
![img](https://github.com/woai3c/leetcode/blob/master/imgs/sum-of-root-to-leaf-binary-numbers.png)

```
输入：[1,0,1,0,1,0,1]
输出：22
解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
```

提示：

1. 树中的结点数介于 1 和 1000 之间。
2. node.val 为 0 或 1 。

## 实现
#### 实现1
```js
let arry
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
var sumRootToLeaf = function(root) {
    if (!root) {
        return 0
    }
    
    arry = []
    const val = root.val + ''

    if (!root.left && !root.right) {
        return parseInt(val, 2)
    }
    
    if (root.left) {
        sumNodeToLeaf(root.left, val)
    }

    if (root.right) {
        sumNodeToLeaf(root.right, val)
    }

    let sum = 0
    for (let i = 0, len = arry.length; i < len; i++) {
        sum += parseInt(arry[i], 2)
    }
    
    return sum
};

function sumNodeToLeaf(node, val) {
    val += node.val
    if (!node.left && !node.right) {
        arry.push(val)
        return
    }
    
    if (node.left) {
        sumNodeToLeaf(node.left, val)
    }
    
    if (node.right) {
        sumNodeToLeaf(node.right, val)
    }
}
```

#### 实现2
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
var sumRootToLeaf = function(root) {
    if (!root) {
        return 0
    }
    
    if (!root.left && !root.right) {
        return root.val
    }
    
    const val = root.val * 2
    if (root.left) {
        root.left.val += val
    }
    
    if (root.right) {
        root.right.val += val
    }
    
    return sumRootToLeaf(root.left) + sumRootToLeaf(root.right)
};
```
