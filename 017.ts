// 剑指 Offer 32 - II. 从上到下打印二叉树 II
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

 

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node. */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function levelOrder(root: TreeNode | null): number[][] {

    if(!root){return [];}

    const queue = [root];
    const result = [];
    let level = 0;

    while(queue.length){
        //初始化第level层
        result[level] = [];

        //记录第level层有多少节点
        let nodeNum = queue.length;
        
        while(nodeNum){
            let node = queue.shift();
            result[level].push(node.val);
            if(node.left){queue.push(node.left)};
            if(node.right){queue.push(node.right)};
            nodeNum--;
        }
        
        level++;
    }
    
    return result;
};