/** ============================
 *  Write a function to remove duplicates from a sorted array.
 * ============================ */

function removeDuplicates(arr: number[]): number {
  let x = 0;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x += 1;
      arr[x] = arr[i];
    }
  }

  return x + 1;
}

// Test cases
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
