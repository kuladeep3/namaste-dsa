/** ============================
 *  Write a function to find the single number that appears only once in the given array.
 * ============================ */

// // Approach 1: HashMap
// function singleNumber(nums: number[]): number | null {
//   let hashMap: Record<number, number> = {};

//   for (let i: number = 0; i < nums.length; i++) {
//     if (!hashMap[nums[i]]) {
//       hashMap[nums[i]] = 1;
//     } else {
//       hashMap[nums[i]]++;
//     }
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (hashMap[nums[i]] === 1) {
//       return nums[i];
//     }
//   }

//   return null;
// }

// Approach 2: Bitwise XOR
function singleNumber(nums: number[]): number {
  let xor: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }

  return xor;
}

// Test Cases:
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1
