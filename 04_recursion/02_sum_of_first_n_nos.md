# Sum of First **n** Natural Numbers Using `Recursion`

## Problem Statement:

### Write a recursive function `sum(n)` that calculates the sum of the first `n` natural numbers (i.e., `1 + 2 + 3 + ... + n`).

Example 1:

- Input: n = 5
- Output: 15

Example 2:

- Input: n = 2
- Output: 3

## Approach:

1. **Base Case (Stopping Condition):**

   - If `n` is equal to `0`, then return `0`.
   - This acts as the termination condition for the recursion.

2. **Recursive Case:**

   - If `n > 0`, return `n + sum(n - 1)`.
   - This keeps reducing `n` by 1 and adds it to the total, until it reaches 0.

## Complexity:

- **Time Complexity:** `O(n)` Because the function makes `n` recursive calls (from `n` down to `0`).

- **Space Complexity:** `O(n)` Due to the recursive call stack, `n` stack frames are stored in memory.

## Logic Breakdown:

```javascript
function sum(n) {
  // Base Case
  if (n === 0) return 0;

  // Recursive Case
  return n + sum(n - 1);
}
```

## Test Cases:

```javascript
console.log(sum(5)); // Output: 15
console.log(sum(2)); // Output: 3
```

> Note: If `n` is large, this approach could lead to a stack overflow. For large `n`, an iterative or formula-based solution is more efficient.
