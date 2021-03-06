// 按摩师
// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

// 注意：本题相对原题稍作改动

//  

// 示例 1：

// 输入： [1,2,3,1]
// 输出： 4
// 解释： 选择 1 号预约和 3 号预约，总时长 = 1 + 3 = 4。


const arr = [1,2,3,1];

const massage = (arr) => {
    const len = arr.length;
    if(len === 0){return 0;}
    if(len === 1){return arr[0];}
    let dp = new Array(len+1).fill(0);

    dp[0] = arr[0];
    dp[1] = Math.max(dp[0],arr[1]);

    for(let i = 2; i<len ; i++){
        dp[i] = Math.max(dp[i-1],dp[i-2] + arr[i])
    }

    return dp[len-1];
}

console.log(massage(arr))