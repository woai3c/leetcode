function ListNode(val) {
    this.val = val
    this.next = null
}

export default function createListNode(arr = []) {
    const sentry = new ListNode()
    let node = sentry
    for (let i = 0, len = arr.length; i < len; i++) {
        node.next = new ListNode(arr[i])
        node = node.next
    }

    return sentry.next
}
