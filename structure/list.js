/**
 * 链表反转
 * 构造三个指针 prev、curr 和 next，对当前结点、以及它之前和之后的结点进行缓存，再完成翻转动作
 * @param head
 * @returns {head}
 */
function listReverse(head){
  let curr = head
  let pre = null

  while (curr){
    let next = curr.next
    pre = curr
    curr.next = curr
    curr = next
  }

  return pre
}

/**
 * 快慢指针
 */

