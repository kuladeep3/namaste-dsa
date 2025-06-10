/** ============================
 *  Write a function to find the maximum number of consecutive 1's in the given array.
 * ============================ */

function findMaxConsecutiveOnes(nums) {
  let curCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      curCount++;
    } else {
      maxCount = Math.max(maxCount, curCount);
      curCount = 0;
    }
  }

  return Math.max(maxCount, curCount);
}

// Test Cases:
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1])); // Output: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
