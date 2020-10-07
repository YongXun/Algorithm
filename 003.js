// k个一组翻转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverse = (head,tail) => {
    //头节点为head且链表长度为k，进行链表的反转
    //生成反转后的头节点
    let rHead = tail.next;
    //生成反转后的尾节点
    const rTail = head;
    //生成移动节点
    let cur = head;
    //生成哨兵节点
    let solider;
    while(rHead !== tail){
        solider = cur.next;
        cur.next = rHead;
        rHead = cur;
        cur = solider;
    }
    //返回反转后的头节点和尾节点
    return [rHead,rTail]
}

const reverseKGroup = (head, k) => {
    //创建虚拟节点
    let node = new ListNode(0);
    node.next = head;
    //创建移动节点
    let cur = head;
    //创建尾节点
    let tail = head;
    //创建哨兵节点用于接回每次局部反转的链表
    let solider = node;
    while(cur){
        // 查看剩余部分长度是否大于等于K
        for(let i = 1;i < k;i++){
            tail = tail.next;
            if(tail === null){
                return node.next;
            }
        }
        //记录当前K个几点后的节点
        const next = tail.next;
        //局部链表反转
        [cur,tail] = reverse(cur,tail);
        //收回局部链表
        solider.next = cur;
        tail.next = next;
        //哨兵后移，用于下次接收
        solider = tail;
        //移动节点后移，用于下次反转
        tail = next;
        cur = next;
    }
    return node.next;
}