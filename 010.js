let arr = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
    //若数组长度小于等于1，直接返回原数组。
    if(nums.length <= 1){return nums;}
    //遍历节点时，包含该节点的情况下能够达到的最大值。
    let maxHere= nums[0];
    //遍历节点时，遍历到一个节点以及之前所能达到的最大值。
    let maxSoFar = nums[0];
    for(const num of nums){
        maxHere = Math.max(num,maxHere+num);
        maxSoFar = Math.max(maxSoFar,maxHere);
    }
    return maxSoFar;
};

console.log(maxSubArray(arr))
