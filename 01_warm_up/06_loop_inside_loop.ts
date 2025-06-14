/** ============================
 *  Loop inside a loop (nested loop)
 * ============================ */

// 01.

for (let i: number = 0; i < 3; i++) {
  for (let j: number = 0; j < 3; j++) {
    console.log(i, j);
  }
}

/** Dry Run:
 *  i = 0 → j = 0, 1, 2 → print (0, 0), (0, 1), (0, 2)
 *  i = 1 → j = 0, 1, 2 → print (1, 0), (1, 1), (1, 2)
 *  i = 2 → j = 0, 1, 2 → print (2, 0), (2, 1), (2, 2)
 *  i = 3 → loop exits (i < 3 is false)
 */

// 02.

for (let i: number = 0; i < 3; i++) {
  for (let j: number = 0; j < i; j++) {
    console.log(i, j);
  }
}

/** Dry Run:
 *  i = 0 → j < 0 → inner loop skipped
 *  i = 1 → j = 0 → print (1, 0)
 *  i = 2 → j = 0, 1 → print (2, 0), (2, 1)
 *  i = 3 → loop exits (i < 3 is false)
 */

// 03.

for (let i: number = 0; i < 5; i++) {
  for (let j: number = 0; j <= i; j++) {
    console.log(i, j);
  }
}

/** Dry Run:
 *  i = 0 → j = 0 → print (0, 0)
 *  i = 1 → j = 0, 1 → print (1, 0), (1, 1)
 *  i = 2 → j = 0, 1, 2 → print (2, 0), (2, 1), (2, 2)
 *  i = 3 → j = 0, 1, 2, 3 → print (3, 0), (3, 1), (3, 2), (3, 3)
 *  i = 4 → j = 0, 1, 2, 3, 4 → print (4, 0), (4, 1), (4, 2), (4, 3), (4, 4)
 *  i = 5 → loop exits (i < 5 is false)
 */

// 04.

for (let i: number = 0; i < 3; i++) {
  for (let j: number = i; j > 0; j--) {
    console.log(i, j);
  }
}

/** Dry Run:
 *  i = 0 → j > 0 → inner loop skipped
 *  i = 1 → j = 1 → print (1, 1)
 *  i = 2 → j = 1, 2 → print (2, 2), (2, 1)
 *  i = 3 → loop exits (i < 3 is false)
 */

// 05.

for (let i: number = 5; i > 0; i--) {
  for (let j: number = 0; j < i; j++) {
    console.log(i, j);
  }
}

/**
 * i = 5 → j = 0, 1, 2, 3, 4 → print (5, 0), (5, 1), (5, 2), (5, 3), (5, 4)
 * i = 4 → j = 0, 1, 2, 3 → print  (4, 0), (4, 1), (4, 2), (4, 3)
 * i = 3 → j = 0, 1, 2 → print  (3, 0), (3, 1), (3, 2)
 * i = 2 → j = 0, 1 → print  (2, 0), (2, 1)
 * i = 1 → j = 0 → print  (1, 0)
 * i = 0 → loop exit (i > 0 is false)
 */
