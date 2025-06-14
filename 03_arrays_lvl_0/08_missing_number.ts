/** ============================
 *  Write a function to find the missing number in the given array.
 * ============================ */

function missingNumber(nums: number[]): number {
  let currSum: number = 0;
  const actualSum: number = (nums.length * (nums.length + 1)) / 2;

  for (let i: number = 0; i < nums.length; i++) {
    currSum += nums[i];
  }

  return actualSum - currSum;
}

// Test Cases:
console.log(missingNumber([3, 0, 1, 4])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
