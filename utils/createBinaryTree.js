let index
let nodeArry
let skip

function TreeNode(val) {
    if (val === null) return null
    this.val = val
    this.left = this.right = null
}

function createBinaryTree(arry) {
    if (!arry || !arry.length) return null
    index = 0
    skip = 0
    nodeArry = [new TreeNode(arry[index])]
    let len = arry.length
    while ((index * 2 + 2 - skip) <= len) {
        
        subCreateBinaryTree(arry)
    }

    return nodeArry[0]
}

function subCreateBinaryTree(arry) {
    const node = nodeArry[index]
    if (!node) {
        skip += 2
        index++
        return
    }
    
    let tempIndex = 2 * index + 1 - skip
    const tempNode1 = arry[tempIndex] !== null? new TreeNode(arry[tempIndex]) : null
    tempIndex++
    const tempNode2 = arry[tempIndex] !== null && arry[tempIndex] !== undefined? new TreeNode(arry[tempIndex]) : null

    node.left = tempNode1
    node.right = tempNode2
    nodeArry.push(tempNode1, tempNode2)
    index++
}

module.exports = createBinaryTree
