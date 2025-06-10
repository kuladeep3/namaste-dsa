/** ============================
 *  Write a function to move all 0's to the end of array.
 * ============================ */

function moveZeroes(nums) {
  let p = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      p++;
    }
  }
  for (let i = p; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

// Test Cases:
console.log(moveZeroes([0, 1, 0, 3, 12])); // Output: [1,3,12,0,0]
console.log(moveZeroes([0])); // Output: [0]
