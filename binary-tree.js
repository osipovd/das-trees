/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function findMinDepth(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;

      const leftDepth = findMinDepth(node.left);
      const rightDepth = findMinDepth(node.right);

      return 1 + Math.min(leftDepth, rightDepth);
    }

    return findMinDepth(this.root);
  }
  

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function findMaxDepth(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;

      const leftDepth = findMaxDepth(node.left);
      const rightDepth = findMaxDepth(node.right);

      return 1 + Math.max(leftDepth, rightDepth);
    }

    return findMaxDepth(this.root);
  }

  

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    function findMaxSum(node) {
      if (!node) return 0;

      const leftSum = findMaxSum(node.left);
      const rightSum = findMaxSum(node.right);

      return Math.max(0, leftSum, rightSum) + node.val;
    }

    return findMaxSum(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

nextLarger(lowerBound) {
    let result = null;

    function inOrderTraversal(node) {
      if (!node) return;

      inOrderTraversal(node.left);

      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
        return;
      }

      inOrderTraversal(node.right);
    }

    inOrderTraversal(this.root);
    return result;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };