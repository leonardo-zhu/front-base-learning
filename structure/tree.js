const TreeNode = function (title, left, right) {
  this.title = title
  this.left = left
  this.right = right
}

const tree = (function () {
  const grandSon3 = new TreeNode("1-1-2-1")
  const grandSon4 = new TreeNode("1-1-1-1")
  const grandSon = new TreeNode("1-1-1", grandSon4)
  const grandSon2 = new TreeNode("1-1-2", undefined, grandSon3)
  const son1 = new TreeNode("1-1", grandSon, grandSon2)
  const son2 = new TreeNode("1-2")
  return new TreeNode("1", son1, son2)
})()

console.log(tree)

/**
 * DFS
 * @param node
 */
function dfs(node) {
  if (!node) {
    return;
  }

  console.log(node.title)
  dfs(node.left)
  dfs(node.right)
}

function dfsWithStack(node) {
  const stack = []
  stack.push(node)
  while (stack.length !== 0) {
    const treeNode = stack.pop()

    console.log(treeNode.title)
    if (treeNode.right) {
      stack.push(treeNode.right)
    }

    if (treeNode.left) {
      stack.push(treeNode.left)
    }
  }
}

function bfs() {

}
