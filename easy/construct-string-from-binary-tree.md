# [606. 根据二叉树创建字符串](https://leetcode-cn.com/problems/construct-string-from-binary-tree/)
你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。

空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

示例 1:
```
输入: 二叉树: [1,2,3,4]
       1
     /   \
    2     3
   /    
  4     

输出: "1(2(4))(3)"

解释: 原本将是“1(2(4)())(3())”，
在你省略所有不必要的空括号对之后，
它将是“1(2(4))(3)”。
```
示例 2:
```
输入: 二叉树: [1,2,3,null,4]
       1
     /   \
    2     3
     \  
      4 

输出: "1(2()(4))(3)"

解释: 和第一个示例相似，
除了我们不能省略第一个对括号来中断输入和输出之间的一对一映射关系。
```
## 解法
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) return ''
 

    function dfs(node, isFirst) {
        if (!node) return ''
        let str = ''
        if (!isFirst) {
            str += '('
        }

        str += node.val

        const left = dfs(node.left, false)
        const right = dfs(node.right, false)
        if (left && !right) {
            str += left
        } else if (!left && right) {
            str += '()' + right
        } else if (left && right) {
            str += left + right
        }

        if (!isFirst) {
            str += ')'
        }

        return str
    }

    return dfs(t, true)
};
```
还是官方解法厉害，特别简洁
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) return ''
    if (!t.left && !t.right) return t.val + ''
    if (!t.right) return t.val + '(' + tree2str(t.left) + ')'
    return t.val + '(' + tree2str(t.left) + ')' + '(' + tree2str(t.right) + ')'
};
```
