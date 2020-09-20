// 合并两条有序链表

// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 递归 勉强能看懂，但自己肯定写不出来
var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2;
    }
    else if(!l2){
        return l1;
    }
    else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }
    else{
        l2.next = mergeTwoLists(l2.next,l1);
        return l2;
    }
};