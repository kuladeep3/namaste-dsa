# 05. Second Largest

## Given an array of numbers, return the second largest number in the array.

1. Example 1:

   - Input: arr = [4, 9, 0, 2, 8, 7, 1]
   - Output: 8
   - Explanation: The second largest number in the array is 8.

2. Example 2:

   - Input: arr = [2]
   - Output: null
   - Explanation: There is only one number in the array, so the second largest number is null.

3. Example 3:
   - Input: arr = [-5, -3, -5, -2, -434, -22]
   - Output: -3
   - Explanation: The second largest number is -3, which is the largest negative number in the array.

### Logic Breakdown:

```javascript
function secondLargest(arr) {
  // Special case: empty or single element array has no second largest number
  if (arr.length < 2) return null;

  // Assume the first and second largest numbers are at negative infinity
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  // Find the first and second largest numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      // Update second largest number if current number is larger and then update first largest number

      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] !== firstLargest && arr[i] > secondLargest) {
      // Update second largest number if current number is larger than second largest number and smaller than first largest number

      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
```

### Test Cases:

```javascript
console.log(secondLargest([4, 9, 0, 2, 8, 7, 1])); // 8
console.log(secondLargest([2])); // null
console.log(secondLargest([-5, -3, -5, -2, -434, -22])); // -3
```
