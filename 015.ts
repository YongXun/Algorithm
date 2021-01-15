//转置矩阵
// 给定一个矩阵 A， 返回 A 的转置矩阵。

// 矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

//  

// 示例 1：

// 输入：[[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[1,4,7],[2,5,8],[3,6,9]]
// 示例 2：

// 输入：[[1,2,3],[4,5,6]]
// 输出：[[1,4],[2,5],[3,6]]
//  

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/transpose-matrix
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function transpose(A: number[][]): number[][] {

    //生成等量的二维数组
    const newArr:any = new Array(A[0].length);
    for(let i = 0; i < A[0].length ; i++){
        newArr[i] = new Array();
    }

    //旋转
    A.forEach((arr)=>{
        arr.forEach((val,idx)=>{
            newArr[idx].push(val);
        })
    })

    return newArr;
};

console.log(transpose([[1,2,3],[4,5,6]]));