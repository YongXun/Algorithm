
//翻转链表2
// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

// 说明:
// 1 ≤ m ≤ n ≤ 链表长度。

// 示例:

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var reverseBetween = function(head, m, n) {
    let node = new ListNode(0);
    node.next = head; //创建虚拟节点，是防止left节点和mNode节点是同一个节点的情况
    if(m === n){return head;}
    let left = node;    //mNode的前一个节点
    let right;  //nNode的后一个节点
    let mNode;  //第m个节点
    let nNode = node;   //第n个节点
    for(let i = 0;i <= m-2;i++){
        left = left.next
    }
    for(let j = 0;j <= n-1;j++){
        nNode = nNode.next
    }
    mNode = left.next;
    right = nNode.next;
    let prev = null;
    let temp;
    let cur = mNode;
    while(cur !== right){
        temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    left.next = prev;
    mNode.next = right;
    return node.next;
};