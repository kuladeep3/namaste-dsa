# 01. Linear Search

## 1. Problem Statement:

### Given an array of integers, find the first position of a given integer `target` if it exists in the array, otherwise return `-1`.

> **Linear Search** is a simple search algorithm used to find a specific element in an array. It checks each element of the array one by one until the target value is found or the end of the array is reached.

Example 1:

- Input: arr = [2, 4, 7, 10], target = 10
- Output: 3

Example 2:

- Input: [6, 8, 0, 3], target = 5
- Output: -1

## Approach:

1. **Iterate array:**

   - If the `arr[index]` is equal to the `target`, return its `index`.

2. **If target is not found:**

   - Return `-1`.

## Complexity:

- **Time Complexity:** `O(n)` where `n` is the length of the array.

- **Space Complexity:** `O(1)` since we are not using any additional space.

## Logic Breakdown:

```javascript
function linearSearch(arr, target) {
  // Iterate array
  for (let i = 0; i < arr.length; i++) {
    // If the arr[i] is equal to the target, return i
    if (arr[i] === target) {
      return i;
    }
  }

  // Return -1 if target is not found
  return -1;
}
```

## Test Cases:

```javascript
console.log(linearSearch([2, 4, 7, 10], 10)); // 3
console.log(linearSearch([6, 8, 0, 3], 5)); // -1
```
