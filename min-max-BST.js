class BstNode{
    constructor(val=null,left=null,right=null){
        this.val = val
        this.left = left 
        this.right = right
    }
}

function findMin(root){
    if (root==null){
        return -1
    }
    var current = root;
    
    while(current.left != null){
        current = current.left
    }
    return current.val
}
function findMinRecur(root){
    if (root==null){
        return -1
    }
    else if(root.left==null){
        return root.val
    }
    return findMinRecur(root.left)
}
function findMaxRecur(root){
    if (root==null){
        return -1
    }
    else if(root.right==null) {
        return root.val
    }
    return findMaxRecur(root.right)
}
function findMax(root){
    if (root==null){
        return -1
    }
    var current = root;
    while(current.right != null){
        current = current.right
    }
    return current.val
}

root = new BstNode(2)
root.left = new BstNode(1)
root.right = new BstNode(3)

console.log(findMin(root))
console.log(findMax(root))
console.log(findMinRecur(root))
console.log(findMaxRecur(root))