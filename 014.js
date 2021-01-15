//最小高度树
// 给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。
// 示例:
// 给定有序数组: [-10,-3,0,5,9],
// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
//           0 
//          / \ 
//        -3   9 
//        /   / 
//      -10  5 
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-height-tree-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function sortedArrayToBST(nums) {
    if (nums.length === 0) {
        return null;
    }
    //找出中间节点
    var middleIndex = Math.floor(nums.length / 2);
    var root = new TreeNode(nums[middleIndex]);
    // 递归创建左右子树
    root.left = sortedArrayToBST(nums.slice(0, middleIndex));
    root.right = sortedArrayToBST(nums.slice(middleIndex + 1));
    return root;
}
;
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
