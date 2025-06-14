/** ============================
 *  Write a function to merge two sorted arrays.
 * ============================ */

// Approach 1
// function merge(
//   nums1: number[],
//   m: number,
//   nums2: number[],
//   n: number
// ): number[] {
//   let nums1Copy: number[] = nums1.slice(0, m);
//   let p1: number = 0;
//   let p2: number = 0;

//   for (let i: number = 0; i < m + n; i++) {
//     if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//       nums1[i] = nums1Copy[p1];
//       p1++;
//     } else {
//       nums1[i] = nums2[p2];
//       p2++;
//     }
//   }

//   return nums1;
// }

// Approach 2
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let p1: number = m - 1;
  let p2: number = n - 1;

  for (let i: number = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }

  return nums1;
}

// Test Cases:
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // Output: [1,2,2,3,5,6]
console.log(merge([0], 0, [1], 1)); // Output: [1]
