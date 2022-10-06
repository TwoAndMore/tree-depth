export interface TreeNode<T> {
  left?: TreeNode<T> | null;
  right?: TreeNode<T> | null;
  value: T;
};

export function treeDepth<T = any>(root: TreeNode<T> | null): number {
  if (root === null) {
    return 0;
  }

  let leftSide = 0;
  let rightSide = 0;

  if (root.left) {
    leftSide = treeDepth(root.left);
  }

  if (root.right) {
    rightSide = treeDepth(root.right);
  }

  return leftSide > rightSide ? leftSide + 1 : rightSide + 1;
};
