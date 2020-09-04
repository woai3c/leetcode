# [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。

 

示例 1:
```
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```
示例 2:
```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```
## 解法
* [一个通用方法团灭 6 道股票问题](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/solution/yi-ge-tong-yong-fang-fa-tuan-mie-6-dao-gu-piao-wen/)
* [股票问题系列通解（转载翻译）](https://leetcode-cn.com/circle/article/qiAgHn/)
### 解一
购买价格即是尽可能的找数组的最小值，求最大利润就是在购买价格后面的数中找一个和购买价格差值最大的数。
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let profit = 0
    for (let i = 1, len = prices.length; i < len; i++) {
        if (buy > prices[i]) {
            buy = prices[i]
        } else if (prices[i] > buy) {
            profit = Math.max(prices[i] - buy, profit)
        }
    }

    return profit
};
```
### 解二
DP
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0
    const dp = []
    const len = prices.length
    for (let i = 0; i < len; i++) {
        dp.push(new Array(2))
    }

    dp[0][0] = 0 // 由于一笔交易需要买入卖出才有利润，所以第 0 天没有利润
    dp[0][1] = -prices[0] // 第 0 天买入，由于利润此时为 0，所以 0 - prices[0] = -prices[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        // T[i][1][1] = max(T[i - 1][1][1], T[i - 1][0][0] - prices[i]) = max(T[i - 1][1][1], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    }

    return dp[len - 1][0]
};
```
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
    for (let i = 1; i < len; i++) {
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, -prices[i])
    }

    return dp_i_0
};
```
