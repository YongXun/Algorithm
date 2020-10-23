//最大子序和

// 定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 示例:

// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

let arr = [1,2];

const maxSubArray = (arr) => {
    if(arr.length <= 1){
        return arr[0];
    }

    let maxHere = arr[0];

    let maxSoFar = arr[0];

    for(let i = 1;i < arr.length;i++){
        maxHere = Math.max(arr[i],maxHere+arr[i]);
        maxSoFar = Math.max(maxSoFar,maxHere);
    }

    return maxSoFar;
}

