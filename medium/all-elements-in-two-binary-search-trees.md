# [1305. 两棵二叉搜索树中的所有元素](https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/)
给你 root1 和 root2 这两棵二叉搜索树。

请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/12/29/q2-e1.png)

示例 1：

```
输入：root1 = [2,1,4], root2 = [1,0,3]
输出：[0,1,1,2,3,4]
```
示例 2：
```
输入：root1 = [0,-10,10], root2 = [5,1,7,0,2]
输出：[-10,0,0,1,2,5,7,10]
```
示例 3：
```
输入：root1 = [], root2 = [5,1,7,0,2]
输出：[0,1,2,5,7]
```
示例 4：
```
输入：root1 = [0,-10,10], root2 = []
输出：[-10,0,10]
```
示例 5：


```
输入：root1 = [1,null,8], root2 = [8,1]
输出：[1,1,8,8]
```
 

提示：

* 每棵树最多有 5000 个节点。
* 每个节点的值在 [-10^5, 10^5] 之间。

## 解法
使用中序遍历两棵树，得到两个有序数组，再来一次循环对他们进行排序。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const result = []
    const arr1 = helper(root1)
    const arr2 = helper(root2)
    const len1 = arr1.length
    const len2 = arr2.length
    let i = 0
    let j = 0
    while (i < arr1.length || j < arr2.length) {
        if (i >= len1 || arr1[i] >= arr2[j]) {
            result.push(arr2[j++])
        } else if (j >= len2 || arr1[i] <= arr2[j]) {
            result.push(arr1[i++])
        }
    }

    return result
};

function helper(node) {
    if (!node) return []
    const result = []
    const queue = []
    while (queue.length || node) {
        while (node) {
            queue.push(node)
            node = node.left
        }

        node = queue.pop()
        result.push(node.val)
        node = node.right
    }

    return result
}
```
