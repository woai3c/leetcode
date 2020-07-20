# [1329. 将矩阵按对角线排序](https://leetcode-cn.com/problems/sort-the-matrix-diagonally/)
给你一个 m * n 的整数矩阵 mat ，请你将同一条对角线上的元素（从左上到右下）按升序排序后，返回排好序的矩阵。

示例 1：

![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/01/25/1482_example_1_2.png)

```
输入：mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
输出：[[1,1,1,1],[1,2,2,2],[1,2,3,3]]
```
提示：

* m == mat.length
* n == mat[i].length
* 1 <= m, n <= 100
* 1 <= mat[i][j] <= 100

## 解法
### 实现一
从 `0,0` 开始的对角线将矩形分成右上部分和左下部分，现在分别对这两部分使用冒泡进行排序。
遍历右上部分 col 从 0 开始，遍历左下部分 col 从 `col.length - 1` 开始。

```js
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    let m = mat.length
    let n = mat[0].length
    let i = 0
    for (let j = 0; j < n; j++) {
        for (let k = i, l = j; k < m - 1 && l < n - 1; k++, l++) {
            for (let k2 = k + 1, l2 = l + 1; k2 < m && l2 < n; k2++, l2++) {
                if (mat[k][l] > mat[k2][l2]) {
                    const temp = mat[k][l]
                    mat[k][l] = mat[k2][l2]
                    mat[k2][l2] = temp
                }
            }
        }
    }
    
    i = m - 1
    for (let j = n - 1; j >= 0; j--) {
        for (let k = i, l = j; k >= 1 && l >= 1; k--, l--) {
            for (let k2 = k - 1, l2 = l - 1; k2 >= 0 && l2 >= 0; k2--, l2--) {
                if (mat[k][l] < mat[k2][l2]) {
                    const temp = mat[k][l]
                    mat[k][l] = mat[k2][l2]
                    mat[k2][l2] = temp
                }
            }
        }
    }
    
    return mat
};
```

### 实现二
一条对角线上的元素都有 `i - j` 相等的特点。利用这个特性建立一个哈希表，表上存储着每条对角线所有元素的数组。

对哈希表上所有数组进行排序，排序完后再回填到矩阵。
```js
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    let m = mat.length
    let n = mat[0].length
    const hash = {}
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!hash[i - j]) {
                hash[i - j] = []
            }

            hash[i - j].push(mat[i][j])
        }
    }

    Object.keys(hash).forEach(key => {
        hash[key].sort((a, b) => a - b)
    })

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            mat[i][j] = hash[i - j].shift()
        }
    }

    return mat
};
```
