# 10. Remove Duplicates from Sorted Array

## Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.

### Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

- ### Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.

- ### Return k.

Example 1:

- Input: nums = [1,1,2]
- Output: 2, nums = [1,2,_]
- Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

- Input: nums = [0,0,1,1,1,2,2,3,3,4]
- Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
- Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).

### Logic Breakdown:

```javascript
function removeDuplicates(arr) {
  // Initialize a pointer to keep track of the number of unique elements
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    // If the current element is greater than the element at the pointer, increment the pointer and update the element at the pointer
    if (arr[i] > arr[x]) {
      x += 1;
      arr[x] = arr[i];
    }
  }

  // `x` now contains the number of unique elements and we initialize it to 0 to keep track of the number of unique elements in the array so now we need to increment `x` by 1 to get the number of unique elements
  return x + 1;
}
```

### Test Cases:

```javascript
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
```

### Note:

1. **Sorted increasing order array**:
   - `arr = [1, 2, 3, 4, 5]`
   - will not contain duplicates
   - so element at `arr[i + 1]` will always be greater than element at `arr[i]`
2. Sorted decreasing order array:
   - `arr = [5, 4, 3, 2, 1]`
   - will not contain duplicates
   - so element at `arr[i + 1]` will always be less than element at `arr[i]`
3. Sorted non-decreasing order array:
   - `arr = [1, 1, 2, 2, 3, 4, 5]`
   - will contain duplicates
   - so element at `arr[i + 1]` will be greater than or equal to element at `arr[i]`
