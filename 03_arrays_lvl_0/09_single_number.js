/** ============================
 *  Write a function to find the single number that appears only once in the given array.
 * ============================ */

// Approach 1: HashMap
function singleNumber(nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]] === 1) {
      return nums[i];
    }
  }
}

// Test Cases:
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1
