# [02. Remove Element](https://leetcode.com/problems/remove-element/description/)

## Problem Statement:

### Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

### Consider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:

- ### Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.

- ### Return `k`.

Example 1:

- Input: nums = [3,2,2,3], val = 3
- Output: 2, nums = [2,2,_,_]
- Explanation: Your function should return k = 2, with the first two elements of nums being 2.
  It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

- Input: nums = [0,1,2,2,3,0,4,2], val = 2
- Output: 5, nums = [0,1,4,0,3,_,_,_]
- Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
  Note that the five elements can be returned in any order.
  It does not matter what you leave beyond the returned k (hence they are underscores).

## Approach: Two Pointers

- Initialize a pointer to keep track of the non matching element's index
- Iterate over the array and update the pointer if the current element is not equal to the value and increment the pointer by 1
- Return the number of non matching elements
- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

## Logic Breakdown:

```javascript
function removeElement(nums, val) {
  // Initialize a pointer to keep track of the non matching element's index
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to the value, update the element at the pointer and increment the pointer
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x += 1;
    }
  }

  // `x` now contains the number of non matching elements
  return x;
}
```

## Test Cases:

```javascript
console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: 5
```
