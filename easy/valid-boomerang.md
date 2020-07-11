# [1037. 有效的回旋镖](https://leetcode-cn.com/problems/valid-boomerang/)
回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。

给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。

示例 1：
```
输入：[[1,1],[2,3],[3,2]]
输出：true
```
示例 2：
```
输入：[[1,1],[2,2],[3,3]]
输出：false
```
提示：

* points.length == 3
* points[i].length == 2
* 0 <= points[i][j] <= 100

## 解法
引用自[高中数学知识：斜率判断](https://leetcode-cn.com/problems/valid-boomerang/solution/gao-zhong-shu-xue-zhi-shi-xie-lu-pan-duan-by-avala/)
> 简单的斜率公式即可搞定。为了防止斜率为0的情形，判断等式采用乘法形式。

斜率即为三角形的正切
```
k=tanα=（y2-y1）/（x2-x1）或（y1-y2）/（x1-x2）
```
```js
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [a, b, c] = points
    return (b[1] - a[1]) * (c[0] - a[0]) != (c[1] - a[1]) * (b[0] - a[0])
};
```
