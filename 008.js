// 平衡二叉树
// 给定一个二叉树，判断它是否是高度平衡的二叉树。

// 本题中，一棵高度平衡二叉树定义为：

// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

// 示例 1:

// 给定二叉树 [3,9,20,null,null,15,7]

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回 true 。

// 示例 2:

// 给定二叉树 [1,2,2,3,3,null,null,4,4]

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// 返回 false 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/balanced-binary-tree
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

//递归的形式获取树的高度
const height = (node) => {
    if(!node){return 0};
    return Math.max(height(node.left),height(node.right)) + 1;
}

//对于每个节点，只要其左右子树的高度差小于1，就符合条件
const isBalanced = function(root) {
    if(!root){return true};
    return (Math.abs(height(root.left)-height(root.right)) <= 1) && isBalanced(root.left) && isBalanced(root.right)    
};