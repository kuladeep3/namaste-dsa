# 03. Bubble Sort

## Problem Statement

### Write a function `bubbleSort()` that takes an array `arr` of integers and returns a sorted array.

> Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. With each pass, the largest unsorted element "bubbles up" to its correct position at the end of the array. This process repeats until no more swaps are needed.

Example 1:

- Input: arr = [5, 2, 4, 1]
- Output: [1, 2, 4, 5]
- Explanation:
  | iteration | [5,2,4,1] | [2,4,1,5] | [2,1,4,5] |
  | --------- | --------- | --------- | --------- |
  | 1st pass | [2,5,4,1] | [2,4,1,5] | [1,2,4,5] |
  | 2nd pass | [2,4,5,1] | [2,1,4,5] | - |
  | 3rd pass | [2,4,1,5] | - | - |

Example 2:

- Input: arr = [0, 2, 9, 3, 1]
- Output: [0, 1, 2, 3, 9]
- Explanation:
  | iteration | [0,2,9,3,1] | [0,2,3,1,9] | [0,2,1,3,9] | [0,1,2,3,9]|
  | --------- | --------- | --------- | --------- | --------- |
  | 1st pass | [0,2,9,3,1] | [0,2,3,1,9] | [0,2,1,3,9] | [0,1,2,3,9] |
  | 2nd pass | [0,2,9,3,1] | [0,2,3,1,9] | [0,1,2,3,9] | - |
  | 3rd pass | [0,2,3,9,1] | [0,2,1,3,9] | - | - |
  | 4th pass | [0,2,3,1,9] | - | - | - |

## Approach:

1. **Iterate over the array(outer loop):**

   - Loop through the array `n - 1` times, where `n` is the length of the array.

2. **In each pass(Outer loop):**

   - Initialize a **flag `isSwapped`** to track whether any swaps were made during a pass.

3. **In each pass(Inner loop):**

   - Compare adjacent elements i.e, `current` and `next` element.

   - If the `current` element is `greater` than the `next`, **swap them**.

4. **If no swaps occur in a pass:**

   - The array is already sorted, so exit early for better performance.

5. **Return the sorted array.**

## Complexity:

- **Time Complexity:**

  - **Worst Case:** `O(n²)` — When the array is in reverse order.
  - **Best Case:** `O(n)` — When the array is already sorted (early exit due to `isSwapped`.
  - **Average Case:** `O(n²)`

- **Space Complexity:** `O(1)` — In-place sorting, no additional space required.

## Logic Breakdown:

```typescript
function bubbleSort(arr) {
  // Iterate over the array for array length - 1 times
  for (let i = 0; i < arr.length - 1; i++) {
    // Initialize a flag to check if any swaps were made
    let isSwapped = false;

    // Iterate over the array for array length - 1 - i times
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Set the flag to true
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }

  // Return the sorted array
  return arr;
}
```

## Test Cases:

```javascript
console.log(bubbleSort([5, 2, 4, 1])); // Output: [1, 2, 4, 5]
console.log(bubbleSort([0, 2, 9, 3, 1])); // Output:  [0, 1, 2, 3, 9]
```
