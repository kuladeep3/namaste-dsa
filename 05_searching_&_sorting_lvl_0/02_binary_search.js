/** ============================
 * Write a function that takes an array and a target value as arguments and returns the index of the target value in the array if it exists, or -1 otherwise.
 * ============================ */

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// Test Cases
console.log(binarySearch([2, 4, 7, 10], 10)); // 3
console.log(binarySearch([6, 8, 0, 3], 5)); // -1
