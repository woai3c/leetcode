# [501. 二叉搜索树中的众数](https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/)
给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：
* 结点左子树中所含结点的值小于等于当前结点的值
* 结点右子树中所含结点的值大于等于当前结点的值
* 左子树和右子树都是二叉搜索树

例如：
```
给定 BST [1,null,2,2],

   1
    \
     2
    /
   2
```
返回`[2]`.

提示：如果众数超过1个，不需考虑输出顺序

进阶：你可以不使用额外的空间吗？（假设由递归产生的隐式调用栈的开销不被计算在内）

## 解法
### 实现1
哈希表
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
var findMode = function(root) {
    if (!root) return []
    const hash = {}
    _findMode(root, hash)

    let maxCount = 0
    let result = []
    Object.keys(hash).forEach(key => {
        const count = hash[key]
        if (count > maxCount) {
            result = [key]
            maxCount = count
        } else if (count == maxCount) {
            result.push(key)
        }
    })

    return result
};

function _findMode(root, hash) {
    if (!root) return
    if (hash[root.val]) {
        hash[root.val]++
    } else {
        hash[root.val] = 1
    }

    _findMode(root.left, hash)
    _findMode(root.right, hash)
}
```
### 实现2
中序遍历二叉搜索树相当于在遍历一个升序数组。
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
 var findMode = function(root) {
    if (!root) return []
    const result = []
    let maxCount = 0
    let val = 0
    let count = 0
    let preNode = null

    function _findMode(node) {
        if (!node) return
        _findMode(node.left)
        if (preNode) {
            if (preNode.val == node.val) {
                count++
            } else {
                val = node.val
                count = 1
            }
            
            // 当前值计数比最大计数要大，则清除原来的结果，推入现在的值
            if (count > maxCount) {
                maxCount = count
                result.length = 0
                result.push(node.val)
            } else if (count == maxCount) {
                result.push(node.val)
            }
        } else {
            // 没有 proNode 说明是第一个节点
            val = node.val
            count = 1
            maxCount = 1
            result.push(node.val)
        }
        
        preNode = node
        _findMode(node.right)
    }

    _findMode(root)

    return result
};
```
