# [897. 递增顺序查找树](https://leetcode-cn.com/problems/increasing-order-search-tree/)
给你一个树，请你 按中序遍历 重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。

 

示例 ：
```
输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  
 
```
提示：

* 给定树中的结点数介于 1 和 100 之间。
* 每个结点都有一个从 0 到 1000 范围内的唯一整数值。
## 解法
```c++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* result;
    TreeNode* preNode;
    TreeNode* increasingBST(TreeNode* root) {
        if (!root) return root;
        result = new TreeNode(0);
        preNode = result;
        dfs(root);
        return result->right;
    }

    void dfs(TreeNode* node) {
        if (!node) return;
        dfs(node->left);
        preNode->right = node;
        preNode = preNode->right;
        dfs(node->right);
        node->left = NULL;
    }
};
```
