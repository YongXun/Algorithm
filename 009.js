// N叉树的前序遍历

// 给定一个 N 叉树，返回其节点值的前序遍历。

// 例如，给定一个 3叉树 :

//  



//  

// 返回其前序遍历: [1,3,5,6,2,4]。

//  

// 说明: 递归法很简单，你可以使用迭代法完成此题吗?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 递归法
const flat = (node,res) => {
    if(!node){return;}
    
    res.push(node.val);

    for(let i = 0;i < node.children.length;i++){
        flat(node.children[i],res);
    }
}

var preorder = function(root) {
    let result = [];
    flat(root,result);
    return result;
};