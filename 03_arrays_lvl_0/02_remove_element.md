# [02. Remove Element](https://leetcode.com/problems/remove-element/description/)

## Problem Statement:

### Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **_in-place_**. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

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

1. **Initialize Pointer:**

   - Use `x = 0` as a pointer to track the position for placing the next valid (non-`val`) element.

2. **Loop Through Array:**

   - Traverse `nums` from start to end.
   - For each element `nums[i]`:

     - If it's **not equal to `val`**, it is a valid element.
     - Copy it to index `x` (`nums[x] = nums[i]`), and increment `x`.

3. **Skip Matches:**

   - If `nums[i] === val`, skip it (i.e., do not update `x` or assign the value).

4. **Return Result:**

   - Return `x`, which is the count of valid elements (non-`val`) after in-place modification.

## Complexity:

- **Time Complexity:** `O(n)` One pass through the array.

- **Space Complexity:** `O(1)` No extra space used; modifies array in-place.

## Logic Breakdown:

```javascript
function removeElement(nums, val) {
  // Initialize a pointer to track the position for placing non-matching elements
  let x = 0;

  // Iterate through each element of the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not equal to the target value
    if (nums[i] !== val) {
      // Place the non-matching element at the current pointer position
      nums[x] = nums[i];
      // Move the pointer forward
      x += 1;
    }
  }

  // Return the count of elements that are not equal to the target value
  return x;
}
```

## Test Cases:

```javascript
console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: 5
```
