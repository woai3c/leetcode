# [449. 序列化和反序列化二叉搜索树](https://leetcode-cn.com/problems/serialize-and-deserialize-bst/)
序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

设计一个算法来序列化和反序列化二叉搜索树。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

编码的字符串应尽可能紧凑。

注意：不要使用类成员/全局/静态变量来存储状态。 你的序列化和反序列化算法应该是无状态的。
## 解法
前序遍历，用空格表示节点不同节点的空隙，# 表示空节点。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return ''
    let result = ''

    function dfs(node) {
        if (!node) return '#'
        result += node.val + ' ' + dfs(node.left) + ' ' + dfs(node.right)
    }

    dfs(root)
    return result.slice(1)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null
    const arr = data.split(' ')
    const len = arr.length
    let index = 0

    function helper() {
        if (index == len) return null
        const val = arr[index++]
        if (val == '#') return null
        const node = new TreeNode(val)
        node.left = helper()
        node.right = helper()
        return node
    }

    return helper()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
```
