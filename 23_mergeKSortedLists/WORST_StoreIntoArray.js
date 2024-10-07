var mergeKLists = function (lists) {
    if (!lists.length) return null
    const arr = []
    for (let list of lists) {
        let currentList = list
        while (currentList) {
            arr.push(currentList.val)
            currentList = currentList.next
        }
    }
    if (!arr.length) return null
    arr.sort((a, b) => a - b)
    const linkedList = new ListNode(arr[0])
    let currentList = linkedList
    for (let i = 1; i < arr.length; i++) {
        currentList.next = new ListNode(arr[i])
        currentList = currentList.next
    }
    return linkedList
};