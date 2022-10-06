import { treeDepth, TreeNode } from './index';

test('No Root', () => {
  expect(treeDepth(null)).toBe(0);
});

test('Without nodes', () => {
  const tree: TreeNode<number> = {
    value: 0,
  };

  expect(treeDepth(tree)).toBe(1);
});

test('Basic nodes', () => {
  const tree: TreeNode<number> = {
    value: 0,
    left: {
      value: 0,
    },
  };

  expect(treeDepth(tree)).toBe(2);
});

test('Basic nodes', () => {
  const tree: TreeNode<number> = {
    value: 50,
    left: {
      value: 30,
      left: { value: 25 },
      right: { value: 45 },
    },
    right: {
      value: 60,
    },
  };

  expect(treeDepth(tree)).toBe(3);
});

test('Basic nodes', () => {
  const tree: TreeNode<number> = {
    value: 5,
    left: {
      value: 4,
      left: {
        value: 2,
        left: { value: 1 },
        right: {
          value: 3,
          left: { value: 2 },
        }
      }
    },
    right: {
      value: 6,
      right: { value: 12 },
    },
  }

  expect(treeDepth(tree)).toBe(5);
});
