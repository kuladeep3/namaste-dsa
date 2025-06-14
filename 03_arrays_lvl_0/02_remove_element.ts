/** ============================
 *  Write a function to remove an element from an array.
 * ============================ */

function removeElement(arr: number[], val: number): number {
  let x = 0;

  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];

      x += 1;
    }
  }

  return x;
}

// Test cases
console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: 5
