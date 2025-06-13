/** ===========================
 * Write a function that takes an array of integers and returns a sorted array.
 * ============================ */

function bubbleSort(arr) {
  // Iterate over the array for array length - 1 times
  for (let i = 0; i < arr.length - 1; i++) {
    // Initialize a flag to check if any swaps were made
    let isSwapped = false;

    // Iterate over the array for array length - 1 - i times
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Set the flag to true
        isSwapped = true;
      }
    }

    if (!isSwapped) {
      break;
    }
  }

  // Return the sorted array
  return arr;
}

// Test Cases
console.log(bubbleSort([5, 2, 4, 1])); // Output: [1, 2, 4, 5]
console.log(bubbleSort([0, 2, 9, 3, 1])); // Output: [0, 1, 2, 3, 9]
