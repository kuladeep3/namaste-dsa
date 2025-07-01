/** ===========================
 * Write a function that takes an array of integers and returns a sorted array.
 * ============================ */

function selectionSort(arr: number[]): number[] {
  // Iterate through the array till the 2nd last element
  for (let i = 0; i < arr.length - 1; i++) {
    // Initialize the minimum value index to the current element's index
    let min = i;

    // Iterate through the remaining elements from i + 1th element
    for (let j = i + 1; j < arr.length; j++) {
      // If the current element is less than the minimum value, update the minimum index
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // [min] is the index of the minimum value in the remaining elements
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([3, 5, 1, 2, 4]));
