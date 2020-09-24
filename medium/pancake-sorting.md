# [969. 煎饼排序](https://leetcode-cn.com/problems/pancake-sorting/)
给定数组 A，我们可以对其进行煎饼翻转：我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序。

返回能使 A 排序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * A.length 范围内的有效答案都将被判断为正确。

 

示例 1：
```
输入：[3,2,4,1]
输出：[4,2,4,3]
解释：
我们执行 4 次煎饼翻转，k 值分别为 4，2，4，和 3。
初始状态 A = [3, 2, 4, 1]
第一次翻转后 (k=4): A = [1, 4, 2, 3]
第二次翻转后 (k=2): A = [4, 1, 2, 3]
第三次翻转后 (k=4): A = [3, 2, 1, 4]
第四次翻转后 (k=3): A = [1, 2, 3, 4]，此时已完成排序。 
```
示例 2：
```
输入：[1,2,3]
输出：[]
解释：
输入已经排序，因此不需要翻转任何内容。
请注意，其他可能的答案，如[3，3]，也将被接受。
```

提示：

* 1 <= A.length <= 100
* A[i] 是 [1, 2, ..., A.length] 的排列

## 解法
[C++ 简单数学法](https://leetcode-cn.com/problems/pancake-sorting/solution/c-jian-dan-shu-xue-fa-by-da-li-wang/)
```ts
function pancakeSort(arr: number[]): number[] {
    const result: number[] = []
    for (let i: number = arr.length - 1; i >= 0; i--) {
        let j: number = getMaxIndex(arr, i + 1)
        reverse(arr, j + 1)
        result.push(j + 1)
        reverse(arr, i + 1)
        result.push(i + 1)
    }

    return result
};

function getMaxIndex(arr: number[], len: number): number {
    let result: number = 0
    let max: number = arr[0]
    for (let i: number = 1; i < len; i++) {
        if (arr[i] > max) {
            result = i
            max = arr[i]
        }
    }

    return result
}

function reverse(arr: number[], len: number) {
    const temp: number[] = arr.slice(0, len)
    let right: number = len - 1
    for (let i: number = 0; i < len; i++, right--) {
        arr[i] = temp[right]
    }
}
```
