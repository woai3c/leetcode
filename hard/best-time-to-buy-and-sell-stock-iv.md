# [188. 买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)
给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:
```
输入: [2,4,1], k = 2
输出: 2
解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
```
示例 2:
```
输入: [3,2,6,5,0,3], k = 2
输出: 7
解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
```
## 解法
```js
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(k, prices) {
    if (!prices.length) return 0
    const dp = []
    const len = prices.length
    if (k >= len / 2) {
        return maxProfit2(prices)
    }

    for (let i = 0; i <= k; i++) {
        dp.push(new Array(2).fill(0))
    }

    for (let j = 1; j <= k; j++) {
        dp[j][0] = 0
        dp[j][1] = -prices[0]
    }
    
    for (let i = 1; i < len; i++) {
        for (let j = 1; j <= k; j++) {
            dp[j][0] = Math.max(dp[j][0], dp[j][1] + prices[i])
            dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - prices[i])
        }
    }

    return dp[k][0]
};


function maxProfit2(prices) {
    let maxProfit = 0
    for (let i = 1, len = prices.length; i < len; i++) {
        if (prices[i - 1] < prices[i]) maxProfit += prices[i] - prices[i - 1]
    }

    return maxProfit
};
```
