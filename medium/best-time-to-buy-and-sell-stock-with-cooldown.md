# [309. 最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
示例:
```
输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
```
## 解法
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0
    const len = prices.length
    let dp_i_0 = 0
    let dp_i_1 = -prices[0]
    let dp_i_pre1_0 = 0 // 上一个数
    let dp_i_pre2_0 = 0 // 前两个数
    for (let i = 1; i < len; i++) {
        dp_i_pre2_0 = dp_i_pre1_0
        dp_i_pre1_0 = dp_i_0
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, dp_i_pre2_0 - prices[i])
    }

    return dp_i_0
};
```
