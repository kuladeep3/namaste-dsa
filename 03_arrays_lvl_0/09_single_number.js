/** ============================
 *  Write a function to find the single number that appears only once in the given array.
 * ============================ */

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
