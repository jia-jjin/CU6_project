var mergeKLists = function (lists) {
    if (!lists.length) return null
    while (lists.length > 1) {
        lists.unshift(mergeTwoLists(lists.shift(), lists.shift()))
    }
    return lists[0]
}

var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(0)
    let currentNode = dummy
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            currentNode.next = list1
            list1 = list1.next
        } else {
            currentNode.next = list2
            list2 = list2.next
        }
        currentNode = currentNode.next
    }

    if (list1) currentNode.next = list1
    if (list2) currentNode.next = list2

    return dummy.next
}