# Sum of all the elements in an array

## Problem Statement:

### Write a recursive function `sum(arr, n)` that calculates the sum of the first `n` elements of an array `arr`.

Example 1:

- Input: arr = [1, 2, 3], n = 3
- Output: 6

Example 2:

- Input: arr = [1, 3, 4, 23, 5, 2], n = 6
- Output: 38

## Approach:

1. **Base Case:**

   - If `n === 1`, return `arr[0]` — the sum of a single-element array is the element itself.

2. **Recursive Case:**

   - If `n > 1`, return `arr[n - 1] + sum(arr, n - 1)`:

     - This adds the last element (`arr[n - 1]`) to the sum of the first `n - 1` elements recursively.

## Complexity:

- **Time Complexity:** `O(n)` The function makes `n` recursive calls, each processing one element.

- **Space Complexity:** `O(n)` Due to the recursive call stack, `n` stack frames are stored in memory.

## Logic Breakdown:

```javascript
function sum(arr, n) {
  // Base Case
  if (n === 1) return arr[0];

  // Recursive Case
  return arr[n - 1] + sum(arr, n - 1);
}
```

## Test Cases:

```javascript
console.log(sum([1, 2, 3], 3)); // Output: 6
console.log(sum([1, 3, 4, 23, 5, 2], 6)); // Output: 38
```
