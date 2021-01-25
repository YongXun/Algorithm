/**
买卖股票的最佳时机

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
**/
//plan A
function maxProfit(prices) {
    //迭代中实时记录最小价格
    var minPrice = prices[0];
    var dp = Array(prices.length);
    console.log(dp);
    dp[0] = 0;
    for (var i = 1; i < prices.length; i++) {
        console.log("\u5F53\u524D\u4E3A\u7B2C" + i + "\u5929\uFF0C\u524D\u4E00\u5929\u6240\u80FD\u8FBE\u5230\u7684\u6700\u5927\u6536\u76CA\u4E3A" + dp[i - 1] + ",\u4ECA\u5929\u4EF7\u683C\u4E3A" + prices[i] + "\uFF0C\u76EE\u524D\u6700\u5C0F\u4EF7\u683C\u4E3A" + minPrice + "\uFF0C\u82E5\u4ECA\u5929\u5356\u51FA\u80FD\u8FBE\u5230\u7684\u6536\u76CA\u4E3A" + (prices[i] - minPrice));
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
        console.log("\u7EFC\u4E0A\u6240\u8FF0,\u4ECA\u65E5\u6240\u80FD\u8FBE\u5230\u6700\u5927\u6536\u76CA\u4E3A" + dp[i], dp);
        minPrice = Math.min(prices[i], minPrice);
    }
    return Math.max(dp[prices.length - 1], 0);
}
;
// console.log(maxProfit([7,1,5,3,6,4]),maxProfit([7,6,4,3,1]))
//planB 减小内存消耗
function planB(prices) {
    //迭代中实时记录最小价格
    var minPrice = prices[0];
    var dp = 0;
    for (var i = 1; i < prices.length; i++) {
        dp = Math.max(dp, prices[i] - minPrice);
        minPrice = Math.min(prices[i], minPrice);
    }
    return Math.max(dp, 0);
}
;
console.log(planB([7, 1, 5, 3, 6, 4]), planB([7, 6, 4, 3, 1]));
