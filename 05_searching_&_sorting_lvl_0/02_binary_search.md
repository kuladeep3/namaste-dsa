# [02. Binary Search](https://leetcode.com/problems/binary-search/description/)

## Problem Statement:

### Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its `index`. Otherwise, return `-1`.

### You must write an algorithm with `O(log n)` runtime complexity.

Example 1:

- Input: nums = [-1,0,3,5,9,12], target = 9
- Output: 4
- Explanation: 9 exists in nums and its index is 4

Example 2:

- Input: nums = [-1,0,3,5,9,12], target = 2
- Output: -1
- Explanation: 2 does not exist in nums so return -1

## Approach:

1. **Initialize pointers:**

   - `start = 0`
   - `end = nums.length - 1`

2. **Binary search loop:**

   - While `start <= end`:

     - Compute `mid = Math.floor((start + end) / 2)`
     - If `nums[mid] === target`: return `mid`
     - If `nums[mid] < target`: move to the right half (`start = mid + 1`)
     - If `nums[mid] > target`: move to the left half (`end = mid - 1`)

3. If loop ends without finding the `target`, return `-1`.

## Complexity:

- **Time Complexity:** `O(log n)` — Halves the search space each iteration.
- **Space Complexity:** `O(1)` — No extra space used.

## Logic Breakdown:

```javascript
function binarySearch(nums, target) {
  // Initialize start and end
  let start = 0;
  let end = nums.length - 1;

  // Iterate until either target is found or start and end meet in the middle
  while (start <= end) {
    // Calculate mid
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      // If target is found, return mid
      return mid;
    } else if (nums[mid] < target) {
      // If target is less than mid, update start
      start = mid + 1;
    } else {
      // If target is greater than mid, update end
      end = mid - 1;
    }
  }

  // -1 is returned if target is not found in nums
  return -1;
}
```

## Test Cases:

```javascript
console.log(binarySearch([2, 4, 7, 10], 10)); // 3
console.log(binarySearch([6, 8, 0, 3], 5)); // -1
```

Here’s a revised and cleaned-up version of your documentation. It improves clarity, grammar, formatting consistency, and accuracy in test cases (especially correcting the second test case input which wasn't sorted, violating binary search prerequisites):
