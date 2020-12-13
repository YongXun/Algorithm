//重建二叉树
// 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字
//  
// 例如，给出
// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：
//     3
//    / \
//   9  20
//     /  \
//    15   7
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function(preorder, inorder) {
    if(preorder.length === 0){
        return null;
    }
    //获取根节点
    const rootVal = preorder[0];
    const rootIndex = inorder.indexOf(rootVal);
    const root = new TreeNode(rootVal);
    //左子树序列
    let leftPreorder = [];
    let leftInorder = [];
    if(rootIndex !== 0){
        leftPreorder = preorder.slice(1,rootIndex+1);
        leftInorder = inorder.slice(0,rootIndex);
    }
    console.log(leftPreorder,leftInorder)
    //右子树序列
    let rightPreorder = [];
    let rightInorder = [];
    if(rootIndex !== inorder.length-1){
        rightPreorder = preorder.slice(rootIndex+1);
        rightInorder = inorder.slice(rootIndex+1);
    }
    console.log(rightPreorder,rightInorder)
    root.left = buildTree(leftPreorder,leftInorder);
    root.right = buildTree(rightPreorder,rightInorder);
    return root;
};

console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]))